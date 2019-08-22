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








module.exports = repoRedis;