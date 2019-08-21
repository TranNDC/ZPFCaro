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
// LeaderBoard - Sorted Set => Shortname: LB
// ------------------------------------------------







// ------------------------------------------------
// Rooms:<uuid> Hash => Shortname: GR
// ------------------------------------------------








module.exports = repoRedis;