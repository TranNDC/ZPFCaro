import { INIT_GAMEROOM, LOAD_GAMEROOMS } from "../actions/roomAction";

import { initState } from "../utils/roomUtil";
import {calculateWinningRate} from "../utils/gameUtil"

const initialState = initState();

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_GAMEROOM:
      return state;
    case LOAD_GAMEROOMS:
      console.log(action.rooms)
      // let user = action.user.userInfo;
      return state;
      // return {
      //   ...state,
      //   'id':user['_id'],
      //   username: user['username'],
      //   'displayedName': user['display_name'],
      //   'email': user['email'],
      //   'points':user['points'],
      //   'winningRate':calculateWinningRate(user['win_num'],user['lose_num'],user['draw_num']),
      //   'winCount':user['win_num'],
      //   'loseCount':user['lose_num'],
      //   'drawCount':user['draw_num'],
      //   // 'avatar':require("../media/avatar.png")'
      // };
    default:
      return state;
  }
};

export default userReducer;

 