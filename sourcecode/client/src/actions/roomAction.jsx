import { api } from "../api/api";
import {store} from "../index";
import  { Redirect } from 'react-router-dom'
import {creaRoomReq} from "../utils/roomUtil";


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
    return callCreateGameRoomApi(request)
      .then(result => {
        history.push('/game')
      }).catch((err) => {
        history.push('/login')
      })

  };
}



export function loadGameRooms(history) {
  return function(dispatch) {
    return callGetGameRoomsApi()
      .then(result => {
        dispatch(loadGameRoom(result.data.listGameRoom));
      }).catch((err) => {
        history.push('/login')
      })

  };
}

function loadGameRoom(data){
  return{
    type: LOAD_GAMEROOMS,
    rooms: data
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