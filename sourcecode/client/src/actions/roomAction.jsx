import { api } from "../api/api";
import {store} from "../index";
import  { Redirect } from 'react-router-dom'
import {setJwtToStorage} from "../utils/storageUtil";


export const INIT_GAMEROOM = "room.INIT_GAMEROOM";
export const LOAD_GAMEROOMS = "room.LOAD_GAMEROOMS";

//type: response
export function initGameRoom() {
  return {
    type: INIT_GAMEROOM
  };
}

export async function loadGameRooms(history){
  await callGetGameRoomsApi().then(
    (res)=>{
      store.dispatch(loadGameRoom(res.data));
    }
  ).catch(
    (err)=>{
      console.log('load game')
      console.log(err.response)
      // history.push('/login')
    }
  )
}

function loadGameRoom(data){
  return{
    type: LOAD_GAMEROOMS,
    user: data
  }
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