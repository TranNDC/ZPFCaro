import { api } from "../api/api";
import {store} from "../index";
import  { Redirect } from 'react-router-dom'
import {creaRoomReq} from "../utils/roomUtil";

import {getJwtFromStorage,clearStorage} from '../utils/storageUtil'

export const INIT_LEADERBOARD = "leaderBoard.INIT";
export const LOAD_LEADERBOARD = "leaderBoard.LOAD";
// export const CREATE_GAMEROOM = "room.CREATE_GAMEROOM";

//type: response
export function initLeaderBoard() {
  return {
    type: INIT_LEADERBOARD
  };
}

// export async function loadLeaderBoard(history){
//   await callGetLeaderBoardApi().then(
//     async (res)=>{
//       console.log(res);
//       await store.dispatch(loadLeaderBoardAction(res.data));
//     }
//   ).catch(
//     (err)=>{
//       console.log(err)
//       clearStorage();
//       history.push('/login')
//     }
//   )
// }

function loadLeaderBoardAction(data){
  return{
    type: LOAD_LEADERBOARD,
    leaderBoard: data
  }
}

export function loadLeaderBoard() {
  return function(){
    let socket = store.getState().ioReducer.socket;
    socket.emit('client-request-info-leaderboard',getJwtFromStorage());
  }
}

export function listenOnLoadLeaderBoard(){
  return function(dispatch){
    let socket = store.getState().ioReducer.socket;
    socket.on('server-send-info-leaderboard', function(data){
      dispatch(loadLeaderBoardAction(data))
    })
  }
}