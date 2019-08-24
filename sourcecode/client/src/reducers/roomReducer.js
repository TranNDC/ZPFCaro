import { INIT_GAMEROOM, LOAD_GAMEROOMS } from "../actions/roomAction";

import { initState,convertResponseToState } from "../utils/roomUtil";
import {calculateWinningRate} from "../utils/gameUtil"

const initialState = initState();


const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_GAMEROOM:
      console.log('initialState');
      console.log(initialState);
      return state;
    case LOAD_GAMEROOMS:
// merge old state and new rooms
      return {
        ...state,
        ...convertResponseToState(action.rooms)
      }
    default:
      return state;
  }
};

export default roomReducer;

 