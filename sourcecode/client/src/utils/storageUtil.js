export function setUserIdToStorage(userId) {
    sessionStorage.setItem('userId', userId);
  }
  
  export function getUserIdFromStorage() {
    var data = sessionStorage.getItem('userId');
    return data;
  }
  
  export function setJwtToStorage(jwt) {
    sessionStorage.setItem('jwt', jwt);
  }
  
  export function getJwtFromStorage() {
    var data = sessionStorage.getItem('jwt');
    return data;
  }
  
  export function clearStorage() {
    sessionStorage.clear();
  }
  
  export function isAuthenticated() {
    var jwt = getJwtFromStorage();
    return jwt!=''&&jwt!=null;
  }