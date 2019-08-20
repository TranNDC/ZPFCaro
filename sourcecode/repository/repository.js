const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
let repository = {}
let collectionUsers
let collectionGames

// Connect to MongoDB & get database with name "ZPFCaro"
repository.connectMongoDB = () => {
    mongo.connect(url, (err, client) => {
        if (err) throw err;
        let myDB = client.db('ZPFCaro')
        collectionUsers = myDB.collection('Users')
        collectionGames = myDB.collection('Games')
    })
}

// Get all users
repository.getAllUsers = () => {
    return collectionUsers.find().toArray()
}

// Get user by username
repository.getUserByUsername = (username) => {
    let val = collectionUsers.findOne({username: username}) 
    return (val != null) ? val : null
}

// Get user by email
repository.getUserByEmail = (email) => {
    let val = collectionUsers.findOne({email: email}) 
    return (val != null) ? val : null
}

// Add user 
// Function receives JSON "newUser" parameters with string structure:
// '{"username" : "xxxxx", "password" : "xxxxx", "email" : "xxxxx", "displayedname" : "xxxxx"}'
repository.addUser = (newUser) => {
    collectionUsers.insertOne({username: newUser.username, password: newUser.password, email: newUser.email, displayedname: newUser.displayedname, points: 0, avatar: "", win_num: 0, draw_num: 0, lose_num: 0}, (err, result) => {
        if (err) throw err;
        return result
    })
}

// Update user info







// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

// Add game
// Function receives JSON "newGame" parameters with string structure:
// '{"id" : "xxxxx", "user_id" : "xxxxx", "guest_id" : "xxxxx", "bet_points" : xxxxx, "status" : xxxxx}'
// status has one of three values : -1 (host lost), 0 (both persion drew), 1 (host won)
repository.addGame = (newGame) => {
    collectionGames.insertOne({_id: newGame.id, user_id: newGame.user_id, guest_id: newGame.guest_id, bet_points: newGame.bet_points, status: newGame.status})
}

// Get info game by gameID
repository.getGameByID = (gameID) => {
    let val = collectionGames.findOne({_id: gameID}) 
    return (val != null) ? val : null
}

module.exports = repository;