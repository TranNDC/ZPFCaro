const redis = require("redis") 
let client = redis.createClient()
const { promisify } = require('util');
let repoRedis = {}

// Reference: https://github.com/NodeRedis/node_redis

// Connect to Redis
repoRedis.connectRedis = () => {
    client.on('connect', function() {
        console.log('Redis connected');
    });
}

// ------------------------------------------------
// BlackListJWT - Set => Shortname: BLJWT
// ------------------------------------------------
function keyBLJWT(jwt) {
    return ("BlackListJWT:" + jwt)
}

// Set JWT to Redis
// Parameter: SRING jwt, TIME (SECONDS) expires
// Result: True 
repoRedis.setBLJWT = async (jwt, expires) => {
    return (await client.setex(keyBLJWT(jwt), expires, 1))
}

// Check JWT existed in Redis or not
// Parameter: STRING jwt
// Result: True | False
repoRedis.isMemberBLJWT = (jwt) => {
    getAsync = promisify(client.get).bind(client)
    return getAsync(keyBLJWT(jwt)).then((res) => {
        return ((res==null) ? false : true)
    })
}

// ------------------------------------------------
// Leaderboard - Sorted Set => Shortname: LB
// ------------------------------------------------
const keyLB = "Leaderboard"

// Add user to Leaderboard
// Parameter: STRING username, INT points
repoRedis.setFieldLB = (username, points) => {
    client.zadd(keyLB, points, username)
}

// Get top 6 of leaderboard
// Result: JSON array with top 6 users
repoRedis.getTop6LB = () => {
    getAsync = promisify(client.zrevrange).bind(client)
    return getAsync(keyLB, 0, 5, 'WITHSCORES').then((res) => {
        return res;
    })
}

// Get all top of leaderboard
// Result: JSON array with all top users
repoRedis.getAllTopLB = () => {
    getAsync = promisify(client.zrevrange).bind(client)
    return getAsync(keyLB, 0, -1, 'WITHSCORES').then((res) => {
        return res;
    })
}

// Get user ranking by username
// Parameter: STRING username
// Result: INT ranking+1 (ranking in redis starts with 0, we must plus 1)
repoRedis.getMyRanking = (username) => {
    getAsync = promisify(client.zrevrank).bind(client)
    return getAsync(keyLB, username).then((res) => {
        return (res+1);
    })
}

// ------------------------------------------------
// GameRoom:<uuid> Hash => Shortname: GR
// ------------------------------------------------
function keyGR(uuid) {
    return ("GameRoom:" + uuid)
}

// Add/Update info of gameroom to Redis
// Parameter: JSON gameroom (uuid, room_name, password, bet_points, host_id, is_waiting)
// is_waiting {0,1} => 1 means room is playing
repoRedis.setFieldGR = (gameroom) => {
    getAsync = promisify(client.hdel).bind(client)
    return getAsync(keyGR(gameroom.uuid), "guest_id").then((res) => {
        client.hmset(keyGR(gameroom.uuid), ["uuid", gameroom.uuid, "room_name", gameroom.room_name, "password", gameroom.password, "bet_points", gameroom.bet_points, "host_id", gameroom.host_id, "is_waiting", 0])  
    })
}

// Update guestid & roomStatus
// Parameter: STRING uuid, guest_id
// is_waiting {0,1} => 1 means room is playing
repoRedis.updateGuestAndStatusGR = (uuid, guest_id) => {
    getAsync = promisify(client.hsetnx).bind(client)
    return getAsync(keyGR(uuid), "guest_id", guest_id).then((res) => {
        if (!res) return false
        client.hmset(keyGR(uuid), ["is_waiting", 1])
        return true
    })
}

// Get all info of one gameroom
// Parameter: keyRoom
// Result: Info array
repoRedis.getInfoOfOneGR = (keyRoom) => {
    getAsync = promisify(client.hgetall).bind(client)
    return getAsync(keyRoom).then((res) => {
        return res
    })
}

// Get all keys of gamerooms
// Result: All gameroom keys
repoRedis.getAllKeysGR = () => {
    getAsync = promisify(client.keys).bind(client)
    return getAsync("GameRoom:*").then((res) => {
        if (res.length==0) return null
        return res
    })
}

// Get all info of all gamerooms
// Result: All info of all gamerooms
repoRedis.getInfoOfAllGR = async () => {
    let gamerooms = []

    allKeysGR = await repoRedis.getAllKeysGR()

    if (allKeysGR == null) return null

    allKeysGR.forEach(async element => {
        info = await repoRedis.getInfoOfOneGR(element)
        gamerooms.push(info)
    });
    
    return gamerooms
}

module.exports = repoRedis;