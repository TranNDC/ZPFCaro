import Message from './Message.js'
import BlackButton from './BlackButton.js'
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

    render() {
        return (
            <div className='chat-frame'>
                <div className="display-frame">
                    <div className='title'>
                        {this.props.opponent.username}
                    </div>
                    <div className='message-frame'>
                        {this.props.messages.map((message,inderx) => {
                            return <Message
                            type={message.type}
                            message={message.message}
                            username={this.props.username}
                            avatar={message.avatar}/>
                        })}
                    </div>
                </div>
                <div className='input-frame'>
                    <ChatInput/>
                    <BlackButton text='>'/>
                </div>
            </div>
        )
    }
}

export default ChatFrame;