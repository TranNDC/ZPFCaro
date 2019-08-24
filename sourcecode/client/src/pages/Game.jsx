import GameSideBar from "../components/GameSideBar";
import GameBoard from "../components/GameBoard";
import Header from "../components/Header";
import CountDownBox from '../subcomponents/CountDownBox'
import EndGameBox from '../components/EndGameBox'

import "./Game.css";
import { connect } from "react-redux";
import { Prompt } from 'react-router'
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { initUser } from "../actions/userAction";
import {
  createRandomMove,
  countDownTick,
  countDownStart,
  countDownClear
} from "../actions/gameAction";
import { initMessages } from "../actions/chatAction";
import { timingSafeEqual } from "crypto";

class Game extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   counter: { time: 5, go: "GO", hidden: "hidden" },
    //   game: { result: "", stateEGB: false }
    // };
    this.state = {
      counterTime: 6, counterGo: "GO", counterHidden: "hidden",
      game: { result: "", stateEGB: false }
    };
    this.startCountDown = this.startCountDown.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentWillMount() {
    this.props.initUser();
    this.props.initMessages();
    // this.startCountDown();
    // this.openEndModal('win')
  }

 
  // componentDidMount() {
  //   this.props.router.setRouteLeaveHook(this.props.route, () => {
  //     if (this.state.unsaved)
  //       return 'You have unsaved information, are you sure you want to leave this page?'
  //   })
  // }

  componentWillUnmout(){
  }

  startCountDown() {
    const intervalId = setInterval(() => {

      this.setState({
        counterTime: this.state.counterTime-1,
        counterHidden:''
      });
      if (this.state.counterTime == -1) {
        clearInterval(this.state.intervalId);
        this.startTimer();
        this.setState({
          counterTime: null,
          counterGo:'',
          counterHidden:'hidden'
        });
      }
    }, 1000);
    this.setState({ intervalId });
  }

  openEndModal(type) {
    this.setState({
      game: {
        ...this.state.game,
        result: type,
        stateEGB: true
      }
    });
  }


  async tick() {
    this.props.countDownTick();
    if (this.props.value <= 0) {
      this.props.createRandomMove();
      await this.props.countDownClear();
      this.startTimer();
    }
  }

  startTimer() {
    let intervalId = setInterval(this.tick, 1000); 
    this.props.countDownStart(intervalId);
  }

  render() {
    let avatar = this.props.avatar;

    let opponent = {
      avatar: { avatar },
      username: "Trann Nguyen",
      isHost: 0
    };

    let className = this.props.className + " animated bounceInRight slow";

    return (
      <Container fluid={true} className={className}>
      <Prompt message="Are you sure you want to leave?"/>
        <CountDownBox
          time={this.state.counterTime}
          go={this.state.counterGo}
          hidden={this.state.counterHidden}
        />

        <EndGameBox
        type={this.state.game.result} 
        stateEGB={this.state.game.stateEGB}
        />
        

        <Header />
        <Row className="m-0">
          <Col xs="9" className="g-game-col p-0 g-game-container">
            <GameBoard width={30} height={22} />
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
    value: state.gameReducer.countDown.value,
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
    },
    countDownTick() {
      dispatch(countDownTick());
    },
    countDownStart(intervalId) {
      dispatch(countDownStart(intervalId));
    },
    createRandomMove() {
      dispatch(createRandomMove());
    },
    countDownClear(){
      dispatch(countDownClear());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
