import ChatFrame from "./ChatFrame";
import GameAvatar from "../subcomponents/GameAvatar";
import Message from "../subcomponents/Message";
import GameTime from "../subcomponents/GameTime";
import BlackButton from "../subcomponents/BlackButton";
import BetPoints from "../subcomponents/BetPoints";
import { connect } from "react-redux";

import "./GameSideBar.css";

import {wantToQuitGame} from '../actions/gameAction'

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class GameSideBar extends React.Component {
  handleClick() {
    this.props.wantToQuitGame();
  }
  
  render() {
    let avatar = this.props.avatar;

    return (
      <Container  className="gsb-game-size-bar w-100 p-0" xs={3}>
        <div className="row gsb-countdown-exitbtn w-100 flex-nowrap justify-content-center ">
          <GameTime className="d-block gsb-left" />
          <Button
            className="pl-3 pr-3 d-inline-block gsb-right black-button"
            text="Exit"
            onClick={this.handleClick.bind(this)}
          >
          Exit
          </Button>
        </div>

        <div className="row betpoints">
          <BetPoints value={this.props.betPoints} />
        </div>

        <Container
          className="justify-content-center p-0 row gsb-user-info-container"
        >
          <Row className="d-flex justify-content-center">
            <Col className="gsb-game-ava-container p-0 left" sx={6}>
              <GameAvatar type="active" avatar={avatar} pattern="x" />
              {/* <GameAvatar type="active" avatar={hostAva} pattern="x" /> */}
            </Col>
            {this.props.opponent && 
            
            <Col className="gsb-game-ava-container p-0 right" sx={6}>
              <GameAvatar avatar={avatar} pattern="o" />
              {/* <GameAvatar type="active" avatar={guestAva} pattern="x" /> */}
            </Col>
          }

          </Row>
        </Container>
        {this.props.opponent && 
        <div className="gsb-chat-container">
          <ChatFrame opponent={this.props.opponent} />
        </div>
        }
      </Container>
    );
  }
}


function mapStateToProps(state, index) {
  return {
    betPoints: state.gameReducer.betPoints,
    user: state.userReducer,
    opponent: state.gameReducer.opponent
  };
}

function mapDispatchToProps(dispatch) {
  return {
    wantToQuitGame(){
      dispatch(wantToQuitGame())
    },
}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSideBar);


// export default GameSideBar;
