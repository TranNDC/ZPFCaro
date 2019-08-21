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
    return (await jwt.sign(data, tokenKey, {expiresIn: "20s"}))
}

// Verify JWT
// Parameter: STRING token
// Result: JSON username | Error about token (wrong characters/expired)
service.verifyJWT = (token) => {
    if (service.existTokenInBLJWT(token) == true) return false

    let val = jwt.verify(token, tokenKey, function(err, decoded) {
        if (err) {
            console.log(err)
            return false
        } 
        return JSON.parse('{"username" : "' + decoded.username + '"}')
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
    try {
        userInfo = await repoMongo.getUserByUsername(username)
        if (userInfo == null) return false

        valComparePass = await service.comparePassword(password, userInfo.password)
        if (!valComparePass) return false

        jsonUsername = JSON.parse('{"username" : "' + username + '"}')
        token = await service.generateJWT(jsonUsername)
        
        return token
    }
    catch (err) {
        console.log(err)
        return false
    }
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

// Get list game room
// Parameter: STRING token
// Result: False | List game room
service.getListGameRoom = async (token) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    username = verifyToken.username

    



    // return (await repoMongo.getUserByUsername(username))
}

// Get leaderboard
// Parameter: STRING token
// Result: False | Leaderboard
service.getLeaderboard = async (token) => {
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    username = verifyToken.username

    



    // return (await repoMongo.getUserByUsername(username))
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
    hashpass = await service.hashPassword(password)
    newUser = '{"username" : "' + username + '", "password" : "' + hashpass + '", "email" : "' + email + '", "displayedname" : "' + displayedname + '"}'
    newUser = JSON.parse(newUser);
    return (await repository.addUser(newUser))
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
    verifyToken = await service.verifyJWT(token)
    if (!verifyToken) return false
    return (await repoRedis.setFieldBLJWT(token))
}

// Deleting expired token in Redis
service.delExpiredTokenInBLJWT = async () => {
    membersBLJWT = await repoRedis.getMembersBLJWT()
    let validJWTArray = []

    membersBLJWT.forEach(element => {
        let val = jwt.verify(element, tokenKey, function(err, decoded) {
            if (err) return false
            return true
        });
        if (val) validJWTArray.push(element)
    });

    repoRedis.delKeyBLJWT()

    if (validJWTArray.length != 0) repoRedis.setFieldBLJWT(validJWTArray)
}








module.exports = service;