import {
  PLACE_PATTERN,
  COUNTDOWN_TICK,
  COUNTDOWN_START,
  COUNTDOWN_CLEAR,
  COUNTDOWN_RESET,
  CREATE_RANDOM_MOVE,
  LOAD_GAME,
  JOIN_GAME,
  UPDATE_GAME,
  END_GAME,
} from "../actions/gameAction";
import { initState, createRandomMove } from "../utils/gameUtil";

// const CELL_WIDTH = 32;
const CELL_WIDTH = 3;
// const CELL_HEIGHT = 22;
const CELL_HEIGHT = 2;
const COUNTDOWN_MAX = 15;
const initialState = initState(CELL_WIDTH, CELL_HEIGHT, COUNTDOWN_MAX);

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_PATTERN:
    return {
        ...state,
        emptyCellNum: state.emptyCellNum - 1,
        gameBoard: [
          ...state.gameBoard,
          (state.gameBoard[action.y][action.x].pattern = action.gamePattern)
        ],
        countDown: {
          ...state.countDown,
          value: COUNTDOWN_MAX
        },
        result: action.result,
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
    // case CREATE_RANDOM_MOVE:
    //   var randomMove = createRandomMove(
    //     state.width,
    //     state.height,
    //     state.gameBoard
    //   );
    //   return {
    //     ...state,
    //     gameBoard: [
    //       ...state.gameBoard,
    //       (state.gameBoard[randomMove.y][randomMove.x].pattern =
    //         state.gamePattern)
    //     ]
    //   };
    case LOAD_GAME: // host load when enter game
        return{
        ...state,
        roomId:action.game.uuid,
        roomName:action.game['room_name'],
        betPoints:action.game['bet_points']+' pts',
        gamePattern:'x',
        result:'',
        isWaiting:true
      }
    case UPDATE_GAME: // host update game when guest join
        return{
          ...state,
          roomId:action.game.uuid,
          roomName:action.game['room_name'],
          betPoints:action.game['bet_points']+' pts',
          gamePattern:'x',
          opponent:{
            ...state.opponent,
            userId: action.game['guest_id'],
            displayedName: action.game['guest_displayed_name'],
            isHost:false
          },
          result:'',
          isWaiting:false
        }
    case JOIN_GAME:  // guest update when join game
      return {
        ...state,
        roomId:action.game.uuid,
        roomName:action.game['room_name'],
        betPoints: action.game['bet_points']+' pts',
        gamePattern:'o',
        result:'',
        opponent:{
          ...state.opponent,
          userId: action.game['host_id'],
          displayedName: action.game['host_displayed_name'],
          isHost:true
        },
        isWaiting:false
      }
    case END_GAME:
      clearInterval(state.countDown.intervalId);
      return{
        ...state,
        result:action.result,
        countDown: {
          ...state.countDown,
          intervalId: -1
        }
      }
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
