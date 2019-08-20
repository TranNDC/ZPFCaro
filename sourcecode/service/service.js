let repository = require('../repository/repository');
let bcrypt = require('bcrypt')
const tokenKey = "TKEteJHPgZldsuYkvYm0SREY-ZPFCaro"
let jwt = require('jsonwebtoken');
let service = {}

// Generate JWT (Auto expires after 7 days)
// Parameter: JSON data
// Result: Token
service.generateJWT = async (data) => {
    return (await jwt.sign(data, tokenKey, {expiresIn: "7d"}))
}

// Verify JWT
// Parameter: STRING token
// Result: JSON username | Error about token (wrong characters/expired)
service.verifyJWT = (token) => {
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

// Check info of login
// Parameter: STRING username, password
// Result: Token (login succesfully) | False (Wrong username, password, error)
service.checkLogin = async (username, password) => {
    try {
        userInfo = await repository.getUserByUsername(username)
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



















module.exports = service;