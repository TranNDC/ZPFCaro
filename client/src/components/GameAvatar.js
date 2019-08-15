import React from 'react';

import './GameAvatar.css';


class GameAvatar extends React.Component{
    render(){
        let classes = 'game-avatar-container '+this.props.type;
        return(
            <div className={classes}>
                <span className="overlay"></span>
                <img className="game-avatar" src={this.props.avatar} alt={this.props.username}/>
                <span class="pattern">{this.props.pattern}</span>
            </div>        
        )

    };
};


export default GameAvatar;