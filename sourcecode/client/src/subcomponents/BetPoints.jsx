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
                <div className="animated flash slower infinite delay-2s">{this.props.value}</div>
            </div>
        );
    }


}

export default BetPoints;
