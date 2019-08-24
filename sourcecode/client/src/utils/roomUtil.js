export function initState() {
    let initStateValue = {
      gameRooms:{},
    };
    return initStateValue;
  }
  

export function creaRoomReq(hostId, hostDisplayedName, roomName, passWord, betPoints){
    const uuidv1 = require('uuid/v1');
    return{
      gameroom:{
        'uuid':uuidv1(),
        'room_name': roomName,
        'password':passWord?passWord:'',
        'bet_points':betPoints?betPoints:0,
        'host_id':hostId,
        'host_displayed_name':hostDisplayedName
      }
    }
}

export function convertResponseToState(rooms){
  let res = {};
  console.log(rooms);
  rooms.forEach(room => {
    if (room['is_waiting'] == 0){
      let id = room.uuid.split('-');
      res[room.uuid] =  {
        id: 'R-'+id[2],
        roomName:room['room_name'],
        hasPassword:room['password'],
        betPoints:room['bet_points'],
        hostDisplayedName:room['host_display_name'],
        isPlaying:room['is_waiting']
      }
    }
  });
  return {gameRooms:res};
}