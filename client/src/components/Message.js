import React from 'react';
import './Message.css';

class Message extends React.Component{

    render() {
        let classes = "message-container " + this.props.type;
        let avatar = <img className='avatar' alt={this.props.username} src={this.props.avatar}/>
        return (
          <div className={classes}>
            <div className="avatar-div">
              {avatar}  
            </div>
            <div className="message-div"><p>{this.props.message}</p></div>
          </div>
        );
    }
}

export default Message;