export const PLACE_PATTERN = 'gameBoard.PLACE_PATTERN'
export const INIT_BOARD = 'gameBoard.INIT_BOARD'

export function placePattern(x, y, pattern){
    return{
        type: PLACE_PATTERN,
        x: x,
        y: y,
        pattern: pattern
    }
}

// export function initBoard(){
//     return{
//         type: INIT_BOARD
//     }
// }
