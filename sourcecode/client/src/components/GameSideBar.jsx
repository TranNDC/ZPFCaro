import ChatFrame from "./ChatFrame";
import GameAvatar from "../subcomponents/GameAvatar";
import Message from "../subcomponents/Message";
import GameTime from "../subcomponents/GameTime";
import BlackButton from "../subcomponents/BlackButton";
import BetPoints from "../subcomponents/BetPoints";
import { connect } from "react-redux";

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

    let hostAva = this.props.opponent.isHost?this.props.opponent.avatar:this.props.user.avatar;
    let guestAva = this.props.opponent.isHost?this.props.user.avatar:this.props.opponent.avatar;
    
    return (
      <Container  className="gsb-game-size-bar w-100 p-0" xs={3}>
        <div className="row gsb-countdown-exitbtn w-100 flex-nowrap justify-content-center ">
          <GameTime className="d-block gsb-left" />
          <BlackButton
            className="pl-3 pr-3 d-inline-block gsb-right"
            text="Exit"
          />
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
            <Col className="gsb-game-ava-container p-0 right" sx={6}>
              <GameAvatar avatar={avatar} pattern="o" />
              {/* <GameAvatar type="active" avatar={guestAva} pattern="x" /> */}
              </Col>
          </Row>
        </Container>

        <div className="gsb-chat-container">
          <ChatFrame opponent={opponent} />
        </div>
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
    // placePattern(x, y) {
    //   dispatch(placePattern(x, y));
    // },
    // countDownReset(){
    //   dispatch(countDownReset());
    // }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSideBar);


// export default GameSideBar;
