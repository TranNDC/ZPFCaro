import React from 'react';
import './GameBoard.css';
import {connect} from "react-redux";
import GameRow from './GameRow'

class GameBoard extends React.Component {
    constructor(props){
        super(props)
    }

    // componentWillMount(){
    //     this.props.initBoard();
    // }

    render(){
// console.log(this.props.gameBoard)
        let classes = 'gb-game-board '+ this.props.className + ' ' + this.props.pattern;

        let rows = [];

        for (let i = 0; i < this.props.height; i++) {
            rows.push(<GameRow key={i} index={i} size={this.props.width}/>);         
        }

        return (
            <table className={classes}>
            {rows}
            </table>
        );
    }


}

function mapStateToProps(state) {
    return {
      width: state.gameReducer.width,
      height : state.gameReducer.height
    }   
  }
  
//   function mapDispatchToProps(dispatch) {
//     return {
//         // placePattern(x,y,pattern) {
//         //     dispatch(placePattern(x,y,pattern))
//         // },
//         initBoard(){
//             dispatch(initBoard())
//         }
//     }
//   }
  

export default connect(
    mapStateToProps,
    null
)(GameBoard);
