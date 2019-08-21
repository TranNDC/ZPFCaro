import GameSideBar from "../components/GameSideBar";
import GameBoard from "../components/GameBoard";
import Header from "../components/Header";
import "./Game.css";
import { connect } from "react-redux";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { initUser } from "../actions/userAction";
import { initMessages } from "../actions/chatAction";

class Game extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.initUser();
    this.props.initMessages();

  }

  render() {
    let avatar = this.props.avatar;

    let opponent = {
      avatar: { avatar },
      username: "Trann Nguyen",
      isHost: 0
    };

    // let messages = [
    //   {
    //     type: "response",
    //     avatar: avatar,
    //     message: "hello What are you doing mannnn??"
    //   },
    //   {
    //     type: "resquest",
    //     avatar: avatar,
    //     message: "hello What the heooo mann??ahoifshoiahfsoiahfsssssssss"
    //   },
    //   {
    //     type: "resquest",
    //     avatar: avatar,
    //     message: "hello What the heooo mann??ahoifshoiahfsoiahfsssssssss"
    //   }
    // ];

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


function mapStateToProps(state, index) {
  return {
    // messages: state.chatReducer.messages,
    // user: state.userReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initUser() {
      dispatch(initUser());
    },
    initMessages() {
      dispatch(initMessages());
    }
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Game);
  
