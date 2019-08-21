const express = require('express')
const app = express()
let repository = require('./repository/repository');
let service = require('./service/service');

// Use body-parser
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/test', async (req, res) => {
   res.send('testing... !')

   /* --------------------------------------------------------------
                  HOW TO USE API OF MONGODB REPOSITORY 
   ----------------------------------------------------------------- */

   // console.log(await repository.getAllUsers())

   // var bcrypt = require('bcrypt')
   // userInfo = await repository.getUserByUsername("quoctk08")
   // var val = false
   // if (userInfo != null) val = await bcrypt.compare("1234567", userInfo.password)
   // console.log(val) // result : true or false

   // console.log(await repository.getUserByEmail("Kienquoctran08@gmail.com"))

   // var bcrypt = require('bcrypt')
   // pass = "123456"
   // hashpass = await bcrypt.hash(pass, 12)
   // newUser = '{"username" : "ndctran98", "password" : "' + hashpass + '", "email" : "tranndc@vng.com.vn", "displayedname" : "Nguyễn Đỗ Cát Trân"}'
   // newUser = JSON.parse(newUser);
   // repository.addUser(newUser)

   // const uuidv4 = require('uuid/v4'); // Random uuid (version 4)
   // newGameID = uuidv4();
   // newGame = '{"id" : "' + newGameID + '", "user_id" : "quoctk08", "guest_id" : "ndctran", "bet_points" : 0, "status" : 1}'
   // newGame = JSON.parse(newGame);
   // try {
   //    repository.addGame(newGame)
   // }
   // catch (e) {
   //    console.log(e)
   // }

   // console.log(await repository.getGameByID("ASDASD123"))

   // repository.updateNameOfUser("quoctk08", "Trần Kiến Quốc")
   // repository.updateEmailOfUser("quoctk08", "quoctk@vng.com.vn")
   // repository.updatePasswordOfUser("quoctk08", "123321")
   // repository.updateAvatarOfUser("quoctk08", "C://.......")
   // repository.updatePointsOfUser("quoctk08", 412)
   // repository.updateWinNumOfUser("quoctk08", 41)
   // repository.updateDrawNumOfUser("quoctk08", 86)
   // repository.updateLoseNumOfUser("quoctk08", 12)

   // userInfo = '{"password" : "098098", "email" : "quoctk@vng.com.vn", "display_name" : "Kiến Quốc Trần", "avatar" : "D://asdasd.....", "points" : 45, "win_num" : 12, "draw_num" : 64, "lose_num" : 21}'
   // userInfo = JSON.parse(userInfo);
   // repository.updateUserInfo("quoctk08", userInfo)

   /* --------------------------------------------------------------
                  HOW TO USE API OF REDIS REPOSITORY 
   ----------------------------------------------------------------- */


})

app.get('/verify', async (req, res) => {
   token = req.headers.authorization

   result = await service.verifyJWT(token) 
   
   if (result != false) {
      res.json({statusCode: 200, JWTMsg: "Verify JWT successfully"})
   }
   else {
      res.json({statusCode: 404, errorMsg: "Verify JWT fail because of invalid token"})
   }
}) 

app.post('/login', async (req, res) => {
   username = req.body.username
   password = req.body.password;

   result = await service.checkLogin(username, password)
   
   if (result != false) {
      res.json({statusCode: 200, token: result})
   }
   else {
      res.json({statusCode: 404, errorMsg: "Username or password is wrong"})
   }
})
 
app.listen(5000, () => {
   repository.connectMongoDB()
   console.log("App is listening on port 5000...")
})