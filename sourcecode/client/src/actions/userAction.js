import { api } from "../api/api";
import {store} from "../index";
import  { Redirect } from 'react-router-dom'
import {setJwtToStorage} from "../utils/storageUtil";


export const INIT_USER = "user.GET_INFO_FOR_MESS";
export const REGISTER_SUCCEEDED = "user.REGISTER_SUCCEEDED";
export const REGISTER_FAILED = "user.REGISTER_FAILED";
export const LOGIN = "user.LOGIN";
export const UPDATE_PASSWORD = "user.UPDATE_PASSWORD";
export const UPDATE_AVATAR = "user.UPDATE_AVATAR";
export const UPDATE_DISPLAYEDNAME = "user.UPDATE_DISPLAYEDNAME";
export const LOGOUT = "user.LOGOUT";
export const LOAD_USERINFO = "user.LOAD_USERINFO";

//type: response
export function initUser() {
  return {
    type: INIT_USER
  };
}

export function logout() {
  return { type: "LOGOUT" };
}

export function register(user,history) {
  return function(dispatch) {
    return callRegisterApi(user)
      .then(result => {
        history.push('/login')
      }).catch((err) => {
        return err.response.data.message;
      })

  };
}

export function login(user,history) {
  return function(dispatch) {
    return callLoginApi(user)
      .then(result => {
        setJwtToStorage(result.data.token); 
        history.push('/')
      }).catch((err) => {
        console.log(err);
        return err.response.data.message;
      })

  };
}



export function loadUserInfo(history) {
  return function(dispatch) {
    return callGetUserInfoApi()
      .then(result => {
        dispatch(loadUser(result.data));
      }).catch((err) => {
        console.log(err);
        history.push('/login')
      })

  };
}


export function loadUser(data){
  return{
    type: LOAD_USERINFO,
    user: data
  }
}


function callRegisterApi(user) {
  var promise = new Promise(function(resolve, reject) {
    api
      .post(`/register`, user)
      .then(res => {
        resolve(res);
      })
      .catch(res => {
        reject(res);
      });
  });
  return promise;
}

function callLoginApi(user) {
  var promise = new Promise(function(resolve, reject) {
    api
      .post(`/login`, user)
      .then(res => {
        resolve(res);
      })
      .catch(res => {
        reject(res);
      });
  });
  return promise;
}

function callGetUserInfoApi() {
  var promise = new Promise(function(resolve, reject) {
    api
      .get(`/user`)
      .then(res => {
        resolve(res);
      })
      .catch(res => {
        reject(res);
      });
  });
  return promise;
}