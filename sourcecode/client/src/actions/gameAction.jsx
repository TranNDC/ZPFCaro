export const PLACE_PATTERN = "game.PLACE_PATTERN";
export const COUNTDOWN_TICK = "game.COUNTDOWN_TICK";
export const COUNTDOWN_START = "game.COUNTDOWN_RESTART";
export const CREATE_RANDOM_MOVE = "game.CREATE_RANDOM_MOVE";
export const COUNTDOWN_CLEAR = "game.COUNTDOWN_CLEAR";
export const COUNTDOWN_RESET = "game.COUNTDOWN_RESET ";
export const LOAD_GAME = "game.LOAD_GAME";
export const JOIN_GAME = "game.JOIN_GAME";

export function placePattern(x, y) {
  return {
    type: PLACE_PATTERN,
    x: x,
    y: y
  };
}
export function loadGame(game){
  return {
    type:LOAD_GAME,
    game:game
  }
}

export function joinGame(game){
  return {
    type:JOIN_GAME,
    game:game
  }
}

export function countDownTick() {
  return {
    type: COUNTDOWN_TICK
  };
}

export function countDownStart(intervalId) {
  return {
    type: COUNTDOWN_START,
    intervalId: intervalId
  };
}

export function countDownClear() {
  return {
    type: COUNTDOWN_CLEAR
  };
}

export function countDownReset() {
  return {
    type: COUNTDOWN_RESET
  };
}

export function createRandomMove(){
  return{
    type: CREATE_RANDOM_MOVE
  }
}

// export function initBoard(){
//     return{
//         type: INIT_BOARD
//     }
// }
