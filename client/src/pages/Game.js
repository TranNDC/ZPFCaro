import ChatFrame from '../components/ChatFrame.js'
import GameAvatar from '../components/GameAvatar.js'
import Message from '../components/Message.js'

import './Game.css'

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Game extends React.Component{



    render(){

        let avatar=this.props.avatar;

let opponent = {
    'avatar': {avatar},
    'username': 'Trann Nguyen',
    'isHost': 0
}

let messages = [
    {
        'type':'response',
        'avatar':avatar,
        'message':"hello What are you doing mannnn??"
    },
    {
        'type':'resquest',
        'avatar':avatar,
        'message':"hello What the heooo mann??ahoifshoiahfsoiahfsssssssss"
    }
]


        return (
            <Container className="game " fluid={true}>
                <Row className="justify-content-center">
                    <Col className="game-container border" xs={7}>

                    </Col>

                    <Col className="info-container border" xs={3}>
                        <div className="countdown-exitbtn"></div>
                        <div className="betpoints"></div>
                        <Container className="user-info-container">
                            <Row>
                                <Col sx={6}>
                                    <GameAvatar
                                        type="active"
                                        avatar={avatar}
                                        pattern='x' 
                                    />
                                </Col>
                                <Col sx={6}>
                                    <GameAvatar
                                        avatar={avatar}
                                        pattern='o' 
                                    />
                                </Col>
                            </Row>
                        </Container>
                        <div className="chat-containter">
                            <ChatFrame
                                opponent={opponent}
                                messages={messages} 
                            />
                        </div>

                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Game;