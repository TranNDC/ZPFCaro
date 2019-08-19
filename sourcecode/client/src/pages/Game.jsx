import GameSideBar from "../components/GameSideBar";
import GameBoard from "../components/GameBoard";
import Header from "../components/Header";
import "./Game.css";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Game extends React.Component {
  render() {
    let avatar = this.props.avatar;

    let opponent = {
      avatar: { avatar },
      username: "Trann Nguyen",
      isHost: 0
    };

    let messages = [
      {
        type: "response",
        avatar: avatar,
        message: "hello What are you doing mannnn??"
      },
      {
        type: "resquest",
        avatar: avatar,
        message: "hello What the heooo mann??ahoifshoiahfsoiahfsssssssss"
      },
      {
        type: "resquest",
        avatar: avatar,
        message: "hello What the heooo mann??ahoifshoiahfsoiahfsssssssss"
      }
    ];

    /* <Container className="game" fluid={true}>
            <Header />
                <Row className="m-0">
                    <Col className="game-container border align-content-center justify-content-center pt-3 pb-3" xs={8}>
                        <GameBoard width={25} height={20}/>
                    </Col>

                    <Col className="info-container border" xs={4}>
                        <GameSideBar avatar={avatar} />
                    </Col>
                </Row>
            </Container> */
    return (
      <Container fluid={true}>
        <Header />
        <Row className="m-0">
          <Col xs="9" className="g-game-col p-0 g-game-container">
          <GameBoard width={30} height={22}/>
          </Col>
          <Col xs="3" className="g-game-col g-info-container">
          <GameSideBar avatar={avatar} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Game;
