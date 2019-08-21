const CELL_WIDTH = 30; 
const CELL_HEIGHT = 22; 

export function initState(){
    let initStateValue ={
        gameBoard:[],
        width:CELL_WIDTH,
        height:CELL_HEIGHT,
    }
    for (let i = 0; i < CELL_HEIGHT; i++) {
        let gameRow = [];
        for (let j = 0; j < CELL_WIDTH; j++){
            let gameCell = {
                'pattern':''
            };
            gameRow.push(gameCell);
        }
        initStateValue.gameBoard.push(gameRow);
    }
    return initStateValue;
}