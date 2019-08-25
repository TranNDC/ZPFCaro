import { api } from "../api/api";
import {store} from "../index";
import  { Redirect } from 'react-router-dom'
import {joinGameGuestReq, creaRoomReq, joinGameInfoRoomReq} from "../utils/roomUtil";
import {getJwtFromStorage,clearStorage} from '../utils/storageUtil'
import {loadGame,joinGame} from './gameAction'
import io from "socket.io-client"
export const INIT_GAMEROOM = "room.INIT_GAMEROOM";
export const LOAD_GAMEROOMS = "room.LOAD_GAMEROOMS";
export const CREATE_GAMEROOM = "room.CREATE_GAMEROOM";

//type: response
export function initGameRoom() {
  return {
    type: INIT_GAMEROOM
  };
}

export function createGameRoom(hostId,displayedName, roomName,password,betPoints,history) {
  let request = creaRoomReq(hostId,displayedName,roomName,password,betPoints);
  return function(dispatch) {
    let socket = store.getState().ioReducer.socket;
    socket.emit('client-request-create-room',request.gameroom,getJwtFromStorage())
    socket.on('server-send-result-create-room', function(res){
      if (res.statusCode == 200){
        dispatch(loadGame(request.gameroom));
        history.push('/game');
      }
      else{ //jwt fail
        clearStorage();
        history.push('/login');
      }
    })

  };
}

export function joinGameRoom(userId, displayedName, roomId, betPoints, password,history) {
  let guest = joinGameGuestReq(userId,displayedName);
  let infogame = joinGameInfoRoomReq(roomId, betPoints, password);

  return function(dispatch) {
    let socket = store.getState().ioReducer.socket;
    socket.emit('client-request-join-room',guest,infogame,getJwtFromStorage())
    socket.on('server-send-result-join-room', function(res){
      if (res.statusCode == 200){
        dispatch(joinGame(res.data));
        history.push('/game');
      }
      else{
        history.push('/');
      }
    })

  };
}


export function loadGameRooms(history) {
  return function(dispatch) {
    return callGetGameRoomsApi()
      .then(result => {
        dispatch(loadGameRoom(result.data.listGameRoom));
      }).catch((err) => {
        clearStorage();
        history.push('/login')
      })

  };
}

function loadGameRoom(data){
  let userId = store.getState().userReducer.id;
  return{
    type: LOAD_GAMEROOMS,
    rooms: data,
    userId: userId
  }
}

function callCreateGameRoomApi(room){
  var promise = new Promise(function(resolve, reject) {
    api
      .post(`/gameroom/`,room)
      .then(res => {
        resolve(res);
      })
      .catch(res => {
        reject(res);
      });
  });
  return promise;
}

function callGetGameRoomsApi() {
  var promise = new Promise(function(resolve, reject) {
    api
      .get(`/gameroom/all`)
      .then(res => {
        resolve(res);
      })
      .catch(res => {
        reject(res);
      });
  });
  return promise;
}