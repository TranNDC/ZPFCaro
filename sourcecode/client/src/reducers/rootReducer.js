import {combineReducers} from 'redux'
import chatReducer from './chatReducer'
import userReducer from './userReducer'
import gameReducer from './gameReducer'
import roomReducer from './roomReducer'
import leaderBoardReducer from './leaderBoardReducer'

const appReducer = combineReducers ({
    chatReducer, userReducer, gameReducer, roomReducer, leaderBoardReducer
})

const rootReducer = (state, action) => {

    return appReducer(state, action)
  }
  
  export default rootReducer