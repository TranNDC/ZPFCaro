import GameSideBar from '../components/GameSideBar'
import GameBoard from '../components/GameBoard'

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
    },
    {
        'type':'resquest',
        'avatar':avatar,
        'message':"hello What the heooo mann??ahoifshoiahfsoiahfsssssssss"
    }
]


        return (
            <Container className="game mt-5" fluid={true}>
                <Row className="justify-content-center">
                    <Col className="game-container border align-content-center justify-content-center pt-3 pb-3" xs={8}>
                        <GameBoard width={25} height={20}/>
                    </Col>

                    <Col className="info-container border" xs={3}>
                        <GameSideBar avatar={avatar} />
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Game;