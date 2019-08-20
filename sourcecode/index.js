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
})

app.get('/', async (req, res) => {
   res.send('hello from server!')
})
 
app.listen(5000, () => {
   repository.connectMongoDB()
   console.log('App listening on port 5000')
})