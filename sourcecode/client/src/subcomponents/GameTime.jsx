
import "./GameTime.css";

import React from "react";

class GameTime extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let classes = 'gt-game-time '+ this.props.className;
        return (
            <div className={classes}>
                {this.props.value}
            </div>
        );
    }


}

export default GameTime;
