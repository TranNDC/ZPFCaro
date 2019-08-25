
import io from "socket.io-client"
import {store} from "../index";
import {calculateResult,createNewRandomMove} from "../utils/gameUtil"

export const PLACE_PATTERN = "game.PLACE_PATTERN";
export const COUNTDOWN_TICK = "game.COUNTDOWN_TICK";
export const COUNTDOWN_START = "game.COUNTDOWN_RESTART";
export const CREATE_RANDOM_MOVE = "game.CREATE_RANDOM_MOVE";
export const COUNTDOWN_CLEAR = "game.COUNTDOWN_CLEAR";
export const COUNTDOWN_RESET = "game.COUNTDOWN_RESET ";
export const LOAD_GAME = "game.LOAD_GAME";
export const WAITTING = "game.WAITTING";
export const JOIN_GAME = "game.JOIN_GAME";
export const START_GAME = "game.START_GAME";
export const UPDATE_GAME = "game.UPDATE_GAME";
export const END_GAME = "game.END_GAME";
export const WANT_TO_QUIT_GAME = "game.QUIT_GAME";
export const LEAVE_GAME = "game.LEAVE_GAME";

export function placeMyPattern(x, y) {
  let socket = store.getState().ioReducer.socket; 
  let gameState =  store.getState().gameReducer; 
  let turn = {x:x,y:y};
  let gameStatus = calculateResult(gameState.gameBoard,x,y,gameState.gamePattern,gameState.emptyCellNum);
  let infoGame = {roomid:gameState.roomId, isHost:!gameState.opponent.isHost};
  socket.emit('client-request-mark-pattern',turn,gameStatus,infoGame);
  return function(dispatch){
    dispatch(placePattern(x,y,gameStatus,gameState.gamePattern,false))
    if (gameStatus != ''){
      dispatch(endGame(gameStatus));
    }
  }
}

export function listenOpponentTurn(){
  let gameState =  store.getState().gameReducer; 
  return function(dispatch){
    let socket = store.getState().ioReducer.socket;    
    socket.on('server-send-data-game',function(turn,data){
      if (data.statusCode == 200){
        dispatch(placePattern(turn.x,turn.y,data.mesage,(gameState.gamePattern=='x')?'o':'x',true));
        if (data.message != ''){
          dispatch(endGame(data.message));
        }
      }
    })
  }
}


export function createRandomMove(){
  let gameState =  store.getState().gameReducer; 
  var randomMove = createNewRandomMove(
    gameState.width,
    gameState.height,
    gameState.gameBoard
  );
  return function(dispatch){
    dispatch(placeMyPattern(randomMove.x,randomMove.y));
  }
}


export function placePattern(x,y,result,gamePattern,isOppturn){
  console.log("place",x,y,gamePattern)
  return {
    type: PLACE_PATTERN,
    x: x,
    y: y,
    result:result,
    gamePattern:gamePattern,
    isMyTurn: isOppturn,
  };
}
    
export function loadGame(game){
  console.log('LOAD GAME')
  return {
    type:LOAD_GAME,
    game:game,
    isMyTurn: false,
  }
} 


export function updateGame(game){
  console.log('UPDATE GAME')
  return {
    type:UPDATE_GAME,
    game: game,
    isMyTurn: true,
  }
}


export function waittingGame(history){
  return function(dispatch){
    let socket = store.getState().ioReducer.socket;  
    if (!socket) { 
      history.push('/');
      return;
    }
    socket.on('server-send-result-join-room',function(res){
      if (res.statusCode == 200){
        console.log(res.data)
        dispatch(updateGame(res.data));
      }
      else{
        history.push('/');
      }
    })
  }
}

export function joinGame(currentGame){ //update opponent, pattern  o
  console.log('JOIN GAME');
  return {
    type:JOIN_GAME,
    game:currentGame,
    isMyTurn: false,
  }
}

export function endGame(result){
  return{
    type: END_GAME,
    result:result
  }
}

export function leaveGame(history,isLogOut=false){
  return function (dispatch){
    let socket = store.getState().ioReducer.socket;
    socket.emit('client-request-out-room');
    if (isLogOut){
      history.push('/login')
    }
    else
      history.push('/');
    return{
      type:LEAVE_GAME
    }
  }
}
export function wantToQuitGame(isLogOut=false){
  let gameState =  store.getState().gameReducer;
  let socket = store.getState().ioReducer.socket;  
  if (!gameState.opponent.userId || gameState.opponent.userId==''){
    socket.emit('host-out-room-not-started',gameState.roomId);
    return{
      type: WANT_TO_QUIT_GAME,
      alert: 'Are you sure to quit the game?',
      isLogOut:isLogOut
    }
  }else{
    let isHostWin = gameState.opponent.isHost;
    socket.emit('client-request-out-room',gameState.roomId,isHostWin)
    return{
      type: WANT_TO_QUIT_GAME,
      alert: "",
      isLogOut:isLogOut
    }
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


export function listenOnServerAskLeave(){
  return function(){
    let socket = store.getState().ioReducer.socket;
    socket.on("server-ask-client-leave-room", function() {
      let gameState =  store.getState().gameReducer;
      socket.emit("client-request-leave-room",gameState.roomId);
    });
  }
}


export function listenOnOpponentLeaveGame(){
  return function (dispatch){
    let socket = store.getState().ioReducer.socket;
    socket.on('room-has-player-out',function(res){
      if (res.statusCode == 200){
        let gameState =  store.getState().gameReducer;
        let isHostWin = !gameState.opponent.isHost;
        socket.emit('client-request-being-winner',gameState.roomId,isHostWin)
        dispatch(endGame(res.message));
      }
    })
  }
} 
