const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const server = require('http').Server(app)
let io = require('socket.io')(server);
let service = require('./service/service');
var cors = require('cors')
var corsOptions = {
   origin: 'http://localhost:3000'
}
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// test
// let repoRedis = require('./repository/repoRedis')

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
   
   // console.log(await repoRedis.getInfoOfAllGR());

   // console.log(await service.getInfoOneGameRoom("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF1b2N0azA4IiwiaWF0IjoxNTY2NDQwMjgxLCJleHAiOjE1NjcwNDUwODF9.cZCLddwWwNvzGiH9oX3az0Q12B78qH9piSl1tm48htA", "GameRoom:123"))
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
      res.status(404).json({message: "Wrong token, logout fail"})
      return
   }
  
    res.status(200).json({message: "Logout successfully"})
})

// Request: username, password, email, displayedName
// Response: msg error or success
app.options('/register', cors())
app.post('/register', cors(corsOptions), async (req, res) => {
   username = req.body.username
   password = req.body.password
   email = req.body.email
   displayedName = req.body.displayedName
   if (! (await service.isUniqueUsername(username))) {
      res.status(400).json({ message: "This username existed, please choose another"})
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
app.options('/gameroom/all', cors())
app.get('/gameroom/all', cors(corsOptions), cors(corsOptions), async (req, res) => {
   token = req.headers.authorization
   
   listGameRoom = await service.getInfoAllGameRoom(token)
   if (listGameRoom==null || listGameRoom==[]) {
      res.status(200).json({listGameRoom: []})
      return  
   }

   if (listGameRoom == false){
      res.status(400).json({message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({listGameRoom: listGameRoom})
})

// Request: token with URL(/gameroom/one?gid=xxxx)
// Response: GameRoom
app.options('/gameroom/one', cors())
app.get('/gameroom/one', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization
   gid = req.query.gid

   grInfo = await service.getInfoOneGameRoom(token, gid)
   if (!grInfo) {
      res.status(400).json({ message: "Wrong/Expired token or room not found"})
      return
   }

   res.status(200).json({gameRoom: grInfo})
})

// Request: token, gameroom
// Parameter of "gameroom": JSON gameroom (uuid, room_name, password, bet_points, guest_id, host_id, is_waiting)
// is_waiting {0,1} => 1 means room is playing
app.options('/gameroom', cors())
app.post('/gameroom', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization
   gameroom = req.body.gameroom
   result = await service.setGameRoom(token, gameroom)
   if (!result) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({ message: "Update successfully"})
})

// Request: token, json uuid, json guest_id
app.options('/gameroom/guest', cors())
app.post('/gameroom/guest',cors(corsOptions), async (req, res) => {
   token = req.headers.authorization
   uuid = req.body.gid
   guest_id = req.body.guest_id

   result = await service.updateGuestAndStatusGR(token, uuid, guest_id)
   if (!result) {
      res.status(400).json({message: "Wrong/Expired token or room not empty"})
      return
   }

   res.status(200).json({ message: "Update successfully"})
})

// Request: token
// Response: leaderboard
app.options('/leaderboard/top6', cors())
app.get('/leaderboard/top6', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization

   leaderboard = await service.getTop6LB(token)
   if (!leaderboard) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({  leaderboard: leaderboard})
})

// Request: token
// Response: leaderboard
app.options('/leaderboard/all', cors())
app.get('/leaderboard/all', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization

   leaderboard = await service.getAllTopLB(token)
   if (!leaderboard) {
      res.status(400).json({ message: "Wrong/Expired token"})
      return
   }

   res.status(200).json({  leaderboard: leaderboard})
})

// Request: token
// Response: userInfo
app.options('/user', cors())
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
app.options('/user/ranking', cors())
app.get('/user/ranking', cors(corsOptions), async (req, res) => {
   token = req.headers.authorization

   result = await service.getMyRanking(token)
   if (!result) {
      res.status(400).json({ errorMsg: "Wrong/Expired token"})
      return
   }

   res.status(200).json({  ranking: result})
})

server.listen(port, () => {
   console.log("App is listening on port 5000...")
   service.connectRedis();
   service.connectMongoDB();
})



// ---------------------------------------------------------------------------
// -------------------------------WEB SOCKETIO--------------------------------
// ---------------------------------------------------------------------------



io.on('connection', function(socket) {

   // Broadcast info about ListGameRoom
   socket.on('client-request-info-listgameroom', function() {
      listgameroom = service.getInfoAllGameRoomNoToken()
      if (listgameroom == null) return
      socket.broadcast.emit('server-send-info-listgameroom', listgameroom)
   })

   // Broadcast info about Leaderboard
   socket.on('client-request-info-leaderboard', function() {
      leaderboard = service.getTop6LBNoToken()
      socket.broadcast.emit('server-send-info-leaderboard', leaderboard)
   })
   
   // Set interval for broadcast info ListGameRoom & Leaderboard
   setInterval(function() {
      listgameroom = service.getInfoAllGameRoomNoToken()
      if (listgameroom == null) return
      leaderboard = service.getTop6LBNoToken()
      socket.broadcast.emit('server-send-info-listgameroom', listgameroom)
      socket.broadcast.emit('server-send-info-leaderboard', leaderboard)
   }, 20000)

   // Join gameroom
   socket.on('client-request-join-room', function(roomid) {
      socket.join(roomid)
   })

   // Chat in gameroom
   socket.on('client-request-chat-in-room', function(roomid, message) {
      socket.to(roomid).emit('server-send-chat-in-room', message)
   })

   







   socket.on('disconnect', function(){
     console.log(socket.id + ': disconnected')
   })
 
   // socket.on('newMessage', data => {
   //   io.sockets.emit('newMessage', {data: data, id: socket.id});
   //   console.log(data);
   // })
 
});
 