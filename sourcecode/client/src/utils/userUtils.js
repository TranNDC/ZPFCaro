export function initState() {
    let initStateValue = {
      id:'',
      username: 'tran',
      'displayedName':'Trann Nguyen',
      'email':'tranndc@vng.com.vn',
      'points':10000,
      'winningRate':100,
      'winCount':100,
      'loseCount':100,
      'drawCount':1000,
      'avatar':require("../media/avatar.png")
    };
    return initStateValue;
}
