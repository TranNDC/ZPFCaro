import { api } from "../api/api";
import {store} from "../index";
import  { Redirect } from 'react-router-dom'
import {creaRoomReq} from "../utils/roomUtil";


export const INIT_LEADERBOARD = "leaderBoard.INIT";
export const LOAD_LEADERBOARD = "leaderBoard.LOAD";
// export const CREATE_GAMEROOM = "room.CREATE_GAMEROOM";

//type: response
export function initLeaderBoard() {
  return {
    type: INIT_LEADERBOARD
  };
}

export async function loadLeaderBoard(history){
  await callGetLeaderBoardApi().then(
    async (res)=>{
      console.log(res);
      await store.dispatch(loadLeaderBoardAction(res.data));
    }
  ).catch(
    (err)=>{
      // console.log(err.response)
      history.push('/login')
    }
  )
}

function loadLeaderBoardAction(data){
  return{
    type: LOAD_LEADERBOARD,
    rooms: data
  }
}

function callGetLeaderBoardApi() {
  var promise = new Promise(function(resolve, reject) {
    api
      .get(`/leaderboard/top6`)
      .then(res => {
        resolve(res);
      })
      .catch(res => {
        reject(res);
      });
  });
  return promise;
}