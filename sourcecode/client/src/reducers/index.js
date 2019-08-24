import {combineReducers} from "redux";

import chatReducer from './chatReducer'
import userReducer from './userReducer'
import gameReducer from './gameReducer'
import roomReducer from './roomReducer'
import leaderBoardReducer from './leaderBoardReducer'


const rootReducer = combineReducers({
    chatReducer, userReducer, gameReducer, roomReducer, leaderBoardReducer
});

export default rootReducer;

