const express = require('express')
const app = express()
let service = require('./service/service');
var cors = require('cors')
// Use body-parser
let bodyParser = require('body-parser');

var corsOptions = {
   origin: 'http://localhost:3000',
 }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/test', async (req, res) => {
   res.send('testing... !')

   /* --------------------------------------------------------------
                  HOW TO USE API OF MONGODB REPOSITORY 
      -------------------------------------------------------------- */

   // console.log(await repoMongo.getAllUsers())

   // var bcrypt = require('bcrypt')
   // userInfo = await repoMongo.getUserByUsername("quoctk08")
   // var val = false
   // if (userInfo != null) val = await bcrypt.compare("1234567", userInfo.password)
   // console.log(val) // result : true or false

   // console.log(await repoMongo.getUserByEmail("Kienquoctran08@gmail.com"))

   // var bcrypt = require('bcrypt')
   // pass = "123456"
   // hashpass = await bcrypt.hash(pass, 12)
   // newUser = '{"username" : "ndctran98", "password" : "' + hashpass + '", "email" : "tranndc@vng.com.vn", "displayedname" : "Nguyễn Đỗ Cát Trân"}'
   // newUser = JSON.parse(newUser);
   // repoMongo.addUser(newUser)

   // const uuidv4 = require('uuid/v4'); // Random uuid (version 4)
   // newGameID = uuidv4();
   // newGame = '{"id" : "' + newGameID + '", "user_id" : "quoctk08", "guest_id" : "ndctran", "bet_points" : 0, "status" : 1}'
   // newGame = JSON.parse(newGame);
   // try {
   //    repoMongo.addGame(newGame)
   // }
   // catch (e) {
   //    console.log(e)
   // }

   // console.log(await repoMongo.getGameByID("ASDASD123"))

   // repoMongo.updateNameOfUser("quoctk", "Trần Kiến Quốc")
   // repoMongo.updateEmailOfUser("quoctk08", "quoctk@vng.com.vn")
   // repoMongo.updatePasswordOfUser("quoctk08", "123321")
   // repoMongo.updateAvatarOfUser("quoctk08", "C://.......")
   // repoMongo.updatePointsOfUser("quoctk08", 412)
   // repoMongo.updateWinNumOfUser("quoctk08", 41)
   // repoMongo.updateDrawNumOfUser("quoctk08", 86)
   // repoMongo.updateLoseNumOfUser("quoctk08", 12)

   // userInfo = '{"password" : "098098", "email" : "quoctk@vng.com.vn", "display_name" : "Kiến Quốc Trần", "avatar" : "D://asdasd.....", "points" : 45, "win_num" : 12, "draw_num" : 64, "lose_num" : 21}'
   // userInfo = JSON.parse(userInfo);
   // repoMongo.updateUserInfo("quoctk08", userInfo)

   /* --------------------------------------------------------------
                  HOW TO USE API OF REDIS REPOSITORY 
      -------------------------------------------------------------- */
   
   // result = await service.addTokenToBLJWT("SSSSS")
   // console.log(result)

   // result = await service.addTokenToBLJWT("SSSSS2")
   // console.log(result)

   // result = await service.existTokenInBLJWT("SSSSS1")
   // console.log(result)

   // result = await service.delExpiredTokenInBLJWT()

   // service.updatePointsLB ("cattran", 1000000)
   // service.updatePointsLB ("quoctk01", 800000)
   // service.updatePointsLB ("quoctk01", 900000)
   // service.updatePointsLB ("quoctk02", 800000)
   // service.updatePointsLB ("quoctk02", 700000)
   // service.updatePointsLB ("quoctk08", 250000)
   // service.updatePointsLB ("quoctk08", 220000)
   // console.log("-------------------------------")
   // console.log(await service.getTop6LB("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF1b2N0azA4IiwiaWF0IjoxNTY2NDQwMjgxLCJleHAiOjE1NjcwNDUwODF9.cZCLddwWwNvzGiH9oX3az0Q12B78qH9piSl1tm48htA"))
   // console.log("-------------------------------")
   // console.log(await service.getAllTopLB("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF1b2N0azA4IiwiaWF0IjoxNTY2NDQwMjgxLCJleHAiOjE1NjcwNDUwODF9.cZCLddwWwNvzGiH9oX3az0Q12B78qH9piSl1tm48htA"))
   // console.log("-------------------------------")
   // console.log(await service.getMyRanking("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF1b2N0azA4IiwiaWF0IjoxNTY2NDQwMjgxLCJleHAiOjE1NjcwNDUwODF9.cZCLddwWwNvzGiH9oX3az0Q12B78qH9piSl1tm48htA"))
   // console.log("-------------------------------")
})





// app.get('/verify', async (req, res) => {
//    token = req.headers.authorization

//    result = await service.verifyJWT(token) 
   
//    if (result != false) {
//       res.json({statusCode: 200, JWTMsg: "Verify JWT successfully"})
//    }
//    else {
//       res.json({statusCode: 404, errorMsg: "Verify JWT fail because of invalid token"})
//    }
// }) 

// app.get('/', (req, res) => {
//    res.send("Hello there, from server!")
// })


//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------

// Request: username | password
// Response: code 200 (token) | code 404 (fail)
app.options('/login', cors())
app.post('/login', cors(corsOptions), async (req, res) => {
   username = req.body.username
   password = req.body.password;

   result = await service.checkLogin(username, password)
   
   if (result) {
      res.status(200).json({token: result})
   }
   else {
      res.status(400).json({message: "Username or password is wrong"})
   }
   
})

// Request: token, logout
// Response: msg error or success
app.options('/logout', cors())
app.post('/logout', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization

   result = await service.addTokenToBLJWT(token)
   if (!result) {
      res.status(200).json({message: "Logout successfully"})
      return
   }

   res.status(404).json({message: "Wrong token, logout fail"})
})

// Request: username, password, email, displayedName
// Response: msg error or success
app.options('/register', cors())
app.post('/register', cors(corsOptions), async (req, res) => {
   username = req.body.username
   password = req.body.password
   email = req.body.email
   displayedName = req.body.displayedName
   console.log(displayedName);
   if (! (await service.isUniqueUsername(username))) {
      res.status(400).json({statusCode: 404, message: "This username existed, please choose another"})
      return
   }

   if (! (await service.isUniqueEmail(email))) {
      res.status(400).json({message: "This email existed, please choose another"})
      return
   }

   result = await service.addNewUser(username, password, email, displayedName)
   if (result == null) {
      res.status(500).json({message: "Server registered new account fail"})
      return
   }

   res.status(200).json({message: "Register new account successfully"})
})

// Request: token
// Response: listGameRoom
app.get('/gameroom/all', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization

   listGameRoom = await service.getInfoAllGameRoom(token)
   if (!listGameRoom) {
      res.status(400).json({message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({listGameRoom: listGameRoom})
})

// Request: token with URL(/gameroom/one?gid=xxxx)
// Response: GameRoom
app.get('/gameroom/one', async (req, res) => {
   token = req.headers.authorization
   gid = req.query.gid

   grInfo = await service.getInfoOneGameRoom(token, gid)
   if (!grInfo) {
      res.json({statusCode: 404, message: "Wrong/Expired token or room not found"})
      return
   }

   res.json({statusCode: 200, gameRoom: grInfo})
})

// Request: token, gameroom
// Parameter of "gameroom": JSON gameroom (uuid, room_name, password, bet_points, guest_id, host_id, is_waiting)
// is_waiting {0,1} => 1 means room is playing
app.post('/gameroom', async (req, res) => {
   token = req.headers.authorization
   gameroom = req.body.gameroom

   result = service.setGameRoom(token, gameroom)
   if (!result) {
      res.json({statusCode: 404, message: "Wrong/Expired token"})
      return
   }

   res.json({statusCode: 200, message: "Update successfully"})
})

// Request: token, json uuid, json guest_id
app.post('/gameroom/guest', async (req, res) => {
   token = req.headers.authorization
   uuid = req.body.gid
   guest_id = req.body.guest_id

   result = await service.updateGuestAndStatusGR(token, uuid, guest_id)
   if (!result) {
      res.status(400).json({statusCode: 400, message: "Wrong/Expired token or room not empty"})
      return
   }

   res.json({statusCode: 200, message: "Update successfully"})
})

// Request: token
// Response: leaderboard
app.get('/leaderboard/top6', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization

   leaderboard = await service.getTop6LB(token)
   if (!leaderboard) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({statusCode: 200, leaderboard: leaderboard})
})

// Request: token
// Response: leaderboard
app.get('/leaderboard/all', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization

   leaderboard = await service.getAllTopLB(token)
   if (!leaderboard) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({statusCode: 200, leaderboard: leaderboard})
})

// Request: token
// Response: userInfo
app.get('/user', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization

   userInfo = await service.getUserInfo(token)
   if (!userInfo) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({  userInfo: userInfo})
})

// Request: token, name
// Response: msg error or success
app.options('/user/name', cors())
app.post('/user/name', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization
   name = req.body.name

   result = await service.updateUserDisplayedName(token, name)
   if (!result) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({  message: "Update successfully"})
})

// Request: token, error
// Response: msg error or success
app.options('/user/email', cors())
app.post('/user/email', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization
   email = req.body.email

   result = await service.updateUserEmail(token, email)
   if (!result) {
      res.status(400).json({ message: "Wrong/Expired token or Existed email"})
      return
   }

   res.status(200).json({  message: "Update successfully"})
})

// Request: token, password
// Response: msg error or success
app.options('/user/password', cors())
app.post('/user/password', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization
   password = req.body.password

   result = await service.updateUserPassword(token, password)
   if (!result) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({  message: "Update successfully"})
})

// Request: token, avatar
// Response: msg error or success
app.options('/user/avatar', cors())
app.post('/user/avatar', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization
   avatar = req.body.avatar

   result = await service.updateUserAvatar(token, avatar)
   if (!result) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({  message: "Update successfully"})
})

// Request: token, points
// Response: msg error or success
app.options('/user/points', cors())
app.post('/user/points', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization
   points = req.body.points

   result = await service.updateUserPoints(token, points)
   if (!result) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({  message: "Update successfully"})
})

// Request: token, winnum
// Response: msg error or success
app.options('/user/winnum', cors())
app.post('/user/winnum', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization
   winnum = req.body.winnum

   result = await service.updateUserWinNum(token, winnum)
   if (!result) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({  message: "Update successfully"})
})

// Request: token, drawnum
// Response: msg error or success
app.options('/user/drawnum', cors())
app.post('/user/drawnum', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization
   drawnum = req.body.drawnum

   result = await service.updateUserDrawNum(token, drawnum)
   if (!result) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({  message: "Update successfully"})
})

// Request: token, losenum
// Response: msg error or success
app.options('/user/losenum', cors())
app.post('/user/losenum', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization
   loseNum = req.body.losenum

   result = await service.updateUserLoseNum(token, losenum)
   if (!result) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({  message: "Update successfully"})
})

// Request: token
// Response: JSON(username, ranking)\
app.get('/user/ranking', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization

   result = await service.getMyRanking(token)
   if (!result) {
      res.status(400).json({ errorMsg: "Wrong/Expired token"})
      return
   }

   res.status(200).json({  ranking: result})
})

app.listen(5000, () => {
   console.log("App is listening on port 5000...")
   service.connectRedis();
   service.connectMongoDB();
})