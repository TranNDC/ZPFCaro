let repoMongo = require('../repository/repoMongo');
let repoRedis = require('../repository/repoRedis');
let bcrypt = require('bcrypt')
const tokenKey = "TKEteJHPgZldsuYkvYm0SREY-ZPFCaro"
let jwt = require('jsonwebtoken');
let service = {}

/* --------------------------------------------------------------
                    REPOSITORY OF MONGODB 
   -------------------------------------------------------------- */
// Connect to repository of MongoDB
service.connectMongoDB = () => {
    repoMongo.connectMongoDB()
}

// Generate JWT (Auto expires after 7 days)
// Parameter: JSON data
// Result: Token
service.generateJWT = async (data) => {
    return (await jwt.sign(data, tokenKey, {expiresIn: "7d"}))
}

// Verify JWT
// Parameter: STRING token
// Result: JSON username | Error about token (wrong characters/expired)
service.verifyJWT = async (token) => {
    if (await service.existTokenInBLJWT(token)) return false

    let val = jwt.verify(token, tokenKey, function(err, decoded) {
        if (err) {
            console.log(err)
            return false
        } 
        return JSON.parse('{"username" : "' + decoded.username + '"}')
    });
    return val
}

// Get remaining expired time of JWT 
// Parameter: STRING token
// Result: SECOND time | Null
service.getRemainExpTimeOfJWT = (token) => {
    let val = jwt.verify(token, tokenKey, function(err, decoded) {
        if (err) {
            console.log(err)
            return null
        } 
        curTime = Math.floor(new Date().getTime()/1000)
        return (decoded.exp - curTime)
    });
    return val
}

// Compare hashPassword & rawPassword
// Parameter: STRING rawPass, hashPass
// Result: True | False
service.comparePassword = async (rawPass, hashPass) => {
    return (await bcrypt.compare(rawPass, hashPass))
}

// Bcrypt for password
// Parameter: STRING raw password
// Result: Hashed password
service.hashPassword = async (rawPass) => {
    return (await bcrypt.hash(rawPass, 12))
}

// Check info of login
// Parameter: STRING username, password
// Result: Token (login succesfully) | False (Wrong username, password, error)
service.checkLogin = async (username, password) => {
    userInfo = await repoMongo.getUserByUsername(username)
    if (userInfo == null) return false

    valComparePass = await service.comparePassword(password, userInfo.password)
    if (!valComparePass) return false

    jsonUsername = JSON.parse('{"username" : "' + username + '"}')
    token = await service.generateJWT(jsonUsername)
    
    return token
}

// Get user info
// Parameter: STRING token
// Result: False | User info
service.getUserInfo = async (token) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    username = verifyToken.username
    return (await repoMongo.getUserByUsername(username))
}

// Update losenum
// Parameter: STRING token, INT losenum
// Result: True | False
service.updateUserLoseNum = async (token, losenum) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    username = verifyToken.username
    return (await repoMongo.updateLoseNumOfUser(username, losenum))
}

// Update drawnum
// Parameter: STRING token, INT drawnum
// Result: True | False
service.updateUserDrawNum = async (token, drawnum) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    username = verifyToken.username
    return (await repoMongo.updateDrawNumOfUser(username, drawnum))
}

// Update winnum
// Parameter: STRING token, INT winnum
// Result: True | False
service.updateUserWinNum = async (token, winnum) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    username = verifyToken.username
    return (await repoMongo.updateWinNumOfUser(username, winnum))
}

// Update points
// Parameter: STRING token, INT points
// Result: True | False
service.updateUserPoints = async (token, points) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    username = verifyToken.username
    return (await repoMongo.updatePointsOfUser(username, points))
}

// Update avatar
// Parameter: STRING token, STRING avatar
// Result: True | False
service.updateUserAvatar = async (token, avatar) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    username = verifyToken.username
    return (await repoMongo.updateAvatarOfUser(username, avatar))
}

// Update password
// Parameter: STRING token, STRING password
// Result: True | False
service.updateUserPassword = async (token, password) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    username = verifyToken.username
    hashPass = service.hashPassword(password)
    return (await repoMongo.updatePasswordOfUser(username, hashPass))
}

// Check email is unique or not
// Parameter: STRING email
// Result True | False
service.isUniqueEmail = async (email) => {
    result = await repoMongo.getUserByEmail(email)
    if (result == null) return true
    return false
}

// Update email
// Parameter: STRING token, STRING email
// Result: True | False
service.updateUserEmail = async (token, email) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    username = verifyToken.username

    isUniqueEmail = await service.isUniqueEmail(email)
    if (!isUniqueEmail) return false

    return (await repoMongo.updateEmailOfUser(username, email))
}

// Update name
// Parameter: STRING token, STRING name
// Result: True | False
service.updateUserDisplayedName = async (token, name) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    username = verifyToken.username
    return (await repoMongo.updateNameOfUser(username, name))
}

// Check username is unique or not
// Parameter: STRING username
// Result: True | False
service.isUniqueUsername = async (username) => {
    result = await repoMongo.getUserByUsername(username)
    return ((result==null) ? true : false )
}

// Add new user to MongoDB
// Parameter: STRING username, password, email, displayedname
// Result: User | Null
service.addNewUser = async (username, password, email, displayedname) => {
    console.log(displayedname);
    hashpass = await service.hashPassword(password)
    newUser = '{"username" : "' + username + '", "password" : "' + hashpass + '", "email" : "' + email + '", "display_name" : "' + displayedname + '"}'
    newUser = JSON.parse(newUser);
    return (await repoMongo.addUser(newUser))
}
 
/* --------------------------------------------------------------
                        REPOSITORY OF REDIS 
   -------------------------------------------------------------- */
// Connect to repository of MongoDB
service.connectRedis = () => {
    repoRedis.connectRedis()
}

// Verify that logout token exists in Redis or not
// Parameter: STRING token
// Result: True | False
service.existTokenInBLJWT = async (token) => {
    return (await repoRedis.isMemberBLJWT(token))
}

// Add token to BLJWT when user LOGOUT
// Parameter: STRING token
// Result: True | False
service.addTokenToBLJWT = async (token) => {
    if (await service.existTokenInBLJWT(token)) return false
    
    expires = await service.getRemainExpTimeOfJWT(token)
    if (expires == null) return false

    return (await repoRedis.setBLJWT(token, expires))
}

// Add/Update points into leaderboard
// Parameter: STRING username, displayedName, INT points
service.updatePointsLB = (username, points) => {
    repoRedis.setFieldLB(username, points)
}

// Process top user info (add more 2 field info: display_name & points)
async function JsonTopUserInfoLB(array) {
    let arrTop6 = []
    for (let i=0; i<array.length-1; i+=2) {
        userInfoDB = await repoMongo.getUserByUsername(array[i])
        if (userInfoDB == null) continue
        var user = '{"username" : "'+ array[i] + '", "display_name" : "' + userInfoDB.display_name + '", "points" : ' + array[i+1] + '}'
        arrTop6.push(JSON.parse(user))
    }

    return arrTop6
}

// Get leaderboard (top 6)
// Parameter: STRING token
// Result: False | Leaderboard
service.getTop6LB = async (token) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    return JsonTopUserInfoLB(await repoRedis.getTop6LB())
}

// Get leaderboard (top6) (no token)
service.getTop6LBNoToken = async () => {
    return JsonTopUserInfoLB(await repoRedis.getTop6LB())
}

// Get leaderboard (all top)
// Parameter: STRING token
// Result: False | Leaderboard
service.getAllTopLB = async (token) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    return JsonTopUserInfoLB(await repoRedis.getAllTopLB())
}

// Get my ranking
// Parameter: STRING token
// Result: JSON username & ranking
service.getMyRanking = async (token) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    username = verifyToken.username

    myRank = await repoRedis.getMyRanking(username)
    result = '{"username" : "'+ username + '", "ranking" : ' + myRank + '}'

    return JSON.parse(result);
}

// Get info of all gamerooms
// Parameter: STRING token
// Result: False | List gameroom
service.getInfoAllGameRoom = async (token) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    
    allGameRooms = await repoRedis.getInfoOfAllGR()
    if (allGameRooms == null) return null
    return allGameRooms
}

// Get info of all gamerooms (no token)
// Result: List gameroom
service.getInfoAllGameRoomNoToken = async () => {
    allGameRooms = await repoRedis.getInfoOfAllGR()
    if (allGameRooms == null) return null
    return allGameRooms
}

// Get info of one gameroom
// Parameter: STRING token, keyRoom
// Result: False | Gameroom info
service.getInfoOneGameRoom = async (token, keyRoom) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false

    val = await repoRedis.getInfoOfOneGR(keyRoom)
    return ((val==null) ? false : val)
}

// Add/Update gameroom info
// Parameter: JSON gameroom (uuid, room_name, password, bet_points, host_id, is_waiting) | Token
// is_waiting {0,1} => 1 means room is playing
// Result: False | True
service.setGameRoom = async (token, gameroom) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false

    repoRedis.setFieldGR(gameroom)
    return true
}

// Update guest_id & status of gameroom
// Parameter: STRING uuid, guest_id
// Result: False | True
service.updateGuestAndStatusGR = async (token, uuid, guest_id) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false

    return (await repoRedis.updateGuestAndStatusGR(uuid, guest_id))
}

module.exports = service;