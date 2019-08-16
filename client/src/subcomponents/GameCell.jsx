
import "./GameCell.css";

import React from "react";

class GameCell extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let classes = 'gc-game-cell d-flex justify-content-center align-content-center '+ this.props.className + ' ' + this.props.pattern;
        return (
            <div className={classes}>
                <a>
                    {this.props.pattern}
                </a>
            </div>
        );
    }


}

export default GameCell;
