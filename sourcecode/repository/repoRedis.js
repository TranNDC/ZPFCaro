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
const keyBLJWT = "BlackListJWT"

repoRedis.setFieldBLJWT = async (value) => {
    return (await client.sadd(keyBLJWT, value))
}

repoRedis.delKeyBLJWT = async () => {
    return (await client.del(keyBLJWT))
}

repoRedis.isMemberBLJWT = (value) => {
    getAsync = promisify(client.sismember).bind(client)
    return getAsync(keyBLJWT, value).then((res) => {
        return ((res==0) ? false : true)
    })
}

repoRedis.getMembersBLJWT = () => {
    getAsync = promisify(client.smembers).bind(client)
    return getAsync(keyBLJWT).then((res) => {
        return res;
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