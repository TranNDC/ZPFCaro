
import { INIT_LEADERBOARD, LOAD_LEADERBOARD } from "../actions/leaderBoardAction";

import { initState,convertResponseToState } from "../utils/leaderBoardUtil";
import {calculateWinningRate} from "../utils/gameUtil"

const initialState = initState();

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
      case INIT_LEADERBOARD:
        return state;
      case LOAD_LEADERBOARD:
  // merge old state and new rooms
        return {
            ...state,
            leaderBoard: action.leaderboard
            
        }
      default:
        return state;
    }
  };
  
  export default roomReducer;
  
   