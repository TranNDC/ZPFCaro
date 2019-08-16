import Message from '../subcomponents/Message.js'
import BlackButton from '../subcomponents/BlackButton.js'
import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

import './ChatFrame.css';


class ChatInput extends React.Component{
    render(){
        return(
            <FormGroup controlId="formBasicEmail">
                <FormControl type="text" placeholder="Type a message..." />
            </FormGroup>
        );
    }
}


class ChatFrame extends React.Component{
    constructor(props) {
        super(props);
      }

    render() {
        return (
            <div className='cfr-chat-frame'>
                <div className="cfr-display-frame">
                    <div className='cfr-title'>
                        {this.props.opponent.username}
                    </div>
                    <div className='cfr-message-frame'>
                        {this.props.messages.map((message,inderx) => {
                            return <Message
                            type={message.type}
                            message={message.message}
                            username={this.props.username}
                            avatar={message.avatar}/>
                        })}
                    </div>
                </div>
                <div className='cfr-input-frame'>
                    <ChatInput className="cfr-input"/>
                    <BlackButton className="cfr-btn" text='>'/>
                </div>
            </div>
        )
    }
}

export default ChatFrame;