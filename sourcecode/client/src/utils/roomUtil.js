export function initState() {
    let initStateValue = {
      gameRooms:{
        '01':{id: "R01", roomName: "Vao day solo nhe anh em", hostId: 5, hostDisplayedName: "Trần Kiến Quốc",  betPoints: 500000, hasPassword: "123123", isPlaying: 0},
        '02':{id: "R02", roomName: "Quanh cho no chet cha no luon1", hostId: 1, hostDisplayedName: "Nguyen Do Cat Tran",  betPoints: 0, hasPassword: null, isPlaying: 0},
        '03':{id: "R03", roomName: "Chien het minh !!!!", hostId: 2, hostDisplayedName: "Tran Trong Phuc",  betPoints: 30000, hasPassword: null, isPlaying: 0},
        '04':{id: "R04", roomName: "Chan qua, choi cho het chan ne", hostId: 6, hostDisplayedName: "Nguyen Minh Toan",  betPoints: 0, hasPassword: "123123", isPlaying: 0},
        '05': {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
   
        '101':{id: "R01", roomName: "Vao day solo nhe anh em", hostId: 5, hostDisplayedName: "Trần Kiến Quốc",  betPoints: 500000, hasPassword: "123123", isPlaying: 0},
        '102':{id: "R02", roomName: "Quanh cho no chet cha no luon1", hostId: 1, hostDisplayedName: "Nguyen Do Cat Tran",  betPoints: 0, hasPassword: null, isPlaying: 0},
        '103':{id: "R03", roomName: "Chien het minh !!!!", hostId: 2, hostDisplayedName: "Tran Trong Phuc",  betPoints: 30000, hasPassword: null, isPlaying: 0},
        '104':{id: "R04", roomName: "Chan qua, choi cho het chan ne", hostId: 6, hostDisplayedName: "Nguyen Minh Toan",  betPoints: 0, hasPassword: "123123", isPlaying: 0},
        '105': {id: "R05", roomName: "Yolo !!!!!!!!!!!!!", hostId: 10, hostDisplayedName: "Ly Hai Duyen",  betPoints: 3000, hasPassword: null, isPlaying: 0},
      }
    };
    return initStateValue;
  }
  

export function creaRoomReq(hostId, roomName, passWord, betPoints){
    const uuidv1 = require('uuid/v1');
    return{
      gameroom:{
        'uuid':uuidv1(),
        'room_name': roomName,
        'password':passWord?passWord:'',
        'bet_points':betPoints?betPoints:0,
        'host_id':hostId
      }
    }
}

export function convertResponseToState(rooms){
  rooms = {};
  rooms.forEach(room => {
    if (room['is_waiting'] == 0){
      rooms[room.uuid] =  {
        id: 'R-'+[room.uuid],
        roomName:[room['room_name']],
        hasPassword:[room['password']],
        betPoints:[room['bet_points']],
        hostDisplayedName:[room['host_display_name']],
        isPlaying:[room['is_waiting']]
      }
    }
  });
  return {gameRooms:rooms};
}