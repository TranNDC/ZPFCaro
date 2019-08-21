import { PLACE_PATTERN } from "../actions/gameAction";
import { initState } from "../utils/utils";

const initialState = initState();

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_PATTERN:
      return {
        ...state,
        gameBoard: [...state.gameBoard,state.gameBoard[action.y][action.x].pattern=action.pattern]
      };
    default:
      return state;
  }
};

export default gameReducer;
