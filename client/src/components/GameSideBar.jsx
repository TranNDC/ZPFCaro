import ChatFrame from "../subcomponents/ChatFrame";
import GameAvatar from "../subcomponents/GameAvatar";
import Message from "../subcomponents/Message";

import "./GameSideBar.css";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class GameSideBar extends React.Component {
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
      }
    ];
    return (
      <Container fluid={true} className="gsb-game-size-bar gsb-border" xs={3}>
        <div className="row countdown-exitbtn" />
        <div className="row betpoints" />
		//------------------------------------------
        <Container fluid={true} className="justify-content-center p-0 m-0 row gsb-user-info-container">
          <Row className="d-flex m-0 justify-content-center">
            <Col className="gsb-game-ava-container p-0 left" sx={6}>
              <GameAvatar  type="active" avatar={avatar} pattern="x" />
            </Col>
            <Col className="gsb-game-ava-container p-0 right" sx={6}>
              <GameAvatar avatar={avatar} pattern="o" />
            </Col>
          </Row>
        </Container>
		//-------------------------------------------
        <div className="gsb-chat-containter">
          <ChatFrame opponent={opponent} messages={messages} />
        </div>
      </Container>
    );
  }
}

export default GameSideBar;
