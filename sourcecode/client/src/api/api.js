import axios from 'axios';
import {getJwtFromStorage} from "../utils/storageUtil";

export const host = 'http://localhost:5000';
const instance = axios.create({
  baseURL: host
});


export const api = {
  get: (url) => {
    var jwt = getJwtFromStorage();
    jwt = (jwt == null)?'':jwt;
    return instance.get(`${url}`, {headers: {'authorization': jwt}});
  },
  post: (url, req) => {
    var jwt = getJwtFromStorage();
    jwt = (jwt == null)?'':jwt;
    return instance.post(`${url}`, req, {headers: {'authorization': jwt}});
  },
//   put: (url, req) => {
//     return instance.put(`${url}`, req);
//   },
//   patch: (url, req) => {
//     return instance.patch(`${url}`, req);
//   },
//   delete: (url) => {
//     return instance.delete(`${url}`);
//   }
}