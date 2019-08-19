import GameCell from '../subcomponents/GameCell'
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './GameBoard.css';

class GameRow extends React.Component {
    render(){
        let classes = 'gc-game-cell d-flex justify-content-center align-content-center '+ this.props.className + ' ' + this.props.pattern;
        
        let cells = [];

        for (let i = 0; i < this.props.size; i++) {
            let tmp = <td><GameCell/></td>
            cells.push(tmp);         
        }
        
        
        return (
            <tr className="gb-row">
                {cells}
            </tr>
        );
    }
}

class GameBoard extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let classes = 'gb-game-board '+ this.props.className + ' ' + this.props.pattern;

        let rows = [];

        for (let i = 0; i < this.props.height; i++) {
            rows.push(<GameRow size={this.props.width}/>);         
        }

        return (
            <table className={classes}>
            {rows}
            </table>
        );
    }


}

export default GameBoard;
