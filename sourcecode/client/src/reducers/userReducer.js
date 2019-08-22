import { INIT_USER, LOAD_USERINFO } from "../actions/userAction";

import { initState } from "../utils/userUtils";
import {calculateWinningRate} from "../utils/gameUtil"

const initialState = initState();

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER:
      return state;
    case LOAD_USERINFO:
      let user = action.user.userInfo;
      return {
        ...state,
        'id':user['_id'],
        username: user['username'],
        'displayedName': user['display_name'],
        'email': user['email'],
        'points':user['points'],
        'winningRate':calculateWinningRate(user['win_num'],user['lose_num'],user['draw_num']),
        'winCount':user['win_num'],
        'loseCount':user['lose_num'],
        'drawCount':user['draw_num'],
        // 'avatar':require("../media/avatar.png")'
      };
    default:
      return state;
  }
};

export default userReducer;

 