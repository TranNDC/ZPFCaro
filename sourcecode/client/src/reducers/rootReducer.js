import {combineReducers} from 'redux'
import chatReducer from './chatReducer'
import userReducer from './userReducer'
import gameReducer from './gameReducer'

export default combineReducers ({
    chatReducer, userReducer, gameReducer
})
