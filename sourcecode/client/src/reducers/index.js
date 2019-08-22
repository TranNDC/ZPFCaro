import {combineReducers} from "redux";

import chatReducer from './chatReducer'
import userReducer from './userReducer'
import gameReducer from './gameReducer'


const rootReducer = combineReducers({
    chatReducer, userReducer, gameReducer
});

export default rootReducer;
