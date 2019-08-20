const express = require('express')
const app = express()
let repository = require('./repository/repository');

app.get('/test', async (req, res) => {
   res.send('testing... !')

   // console.log(await repository.getAllUsers())

   // console.log(await repository.getUserByUsername("quoctk"))

   // console.log(await repository.getUserByEmail("Kienquoctran08@gmail.com"))

   // newUser = '{"username" : "ndctran98", "password" : "123456", "email" : "tranndc@vng.com.vn", "displayedname" : "Nguyễn Đỗ Cát Trân"}'
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
})

app.get('/', async (req, res) => {
   res.send('hello from server!')
})
 
app.listen(5000, () => {
   repository.connectMongoDB()
   console.log('App listening on port 5000')
})