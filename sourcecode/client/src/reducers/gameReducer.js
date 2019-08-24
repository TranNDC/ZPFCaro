import {
  PLACE_PATTERN,
  COUNTDOWN_TICK,
  COUNTDOWN_START,
  COUNTDOWN_CLEAR,
  COUNTDOWN_RESET,
  CREATE_RANDOM_MOVE
} from "../actions/gameAction";
import { initState, createRandomMove, calculateResult } from "../utils/gameUtil";

const CELL_WIDTH = 32;
const CELL_HEIGHT = 22;
const COUNTDOWN_MAX = 15;
const initialState = initState(CELL_WIDTH, CELL_HEIGHT, COUNTDOWN_MAX);

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_PATTERN:
      return {
        ...state,
        emptyCellNum: state.emtyCellNum - 1,
        result: calculateResult(
          state.gameBoard,
          action.x,
          action.y,
          state.gamePattern,
          state.emtyCellNum,
        ),
        gameBoard: [
          ...state.gameBoard,
          (state.gameBoard[action.y][action.x].pattern = state.gamePattern)
        ]
      };
    case COUNTDOWN_TICK:
      return {
        ...state,
        countDown: {
          ...state.countDown,
          value: state.countDown.value - 1
        }
      };
    case COUNTDOWN_START:
      return {
        ...state,
        countDown: {
          ...state.countDown,
          value: COUNTDOWN_MAX,
          intervalId: action.intervalId
        }
      };
    case CREATE_RANDOM_MOVE:
      var randomMove = createRandomMove(
        state.width,
        state.height,
        state.gameBoard
      );
      return {
        ...state,
        gameBoard: [
          ...state.gameBoard,
          (state.gameBoard[randomMove.y][randomMove.x].pattern =
            state.gamePattern)
        ]
      };
    case COUNTDOWN_CLEAR:
      clearInterval(state.countDown.intervalId);
      return {
        ...state,
        countDown: {
          ...state.countDown,
          intervalId: -1
        }
      };
    case COUNTDOWN_RESET: {
      return {
        ...state,
        countDown: {
          ...state.countDown,
          value: COUNTDOWN_MAX
        }
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
