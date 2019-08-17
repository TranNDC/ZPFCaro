import "./BetPoints.css";

import React from "react";

class BetPoints extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let classes = 'bp-bet-points '+ this.props.className;
        return (
            <div className={classes}>
                {this.props.value}
            </div>
        );
    }


}

export default BetPoints;
