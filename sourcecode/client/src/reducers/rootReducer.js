import {combineReducers} from 'redux'
import chatReducer from './chatReducer'
import userReducer from './userReducer'
import gameReducer from './gameReducer'

const appReducer = combineReducers ({
    chatReducer, userReducer, gameReducer
})

const rootReducer = (state, action) => {

    return appReducer(state, action)
  }
  
  export default rootReducer