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

repoRedis.setBLJWT = async (jwt, expires) => {
    return (await client.setex(keyBLJWT(jwt), expires, 1))
}

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

repoRedis.setFieldLB = (username, points) => {
    client.zadd(keyLB, points, username)
}

repoRedis.getTop6LB = () => {
    getAsync = promisify(client.zrevrange).bind(client)
    return getAsync(keyLB, 0, 5, 'WITHSCORES').then((res) => {
        return res;
    })
}

repoRedis.getAllTopLB = () => {
    getAsync = promisify(client.zrevrange).bind(client)
    return getAsync(keyLB, 0, -1, 'WITHSCORES').then((res) => {
        return res;
    })
}

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