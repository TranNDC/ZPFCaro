import "./GameTime.css";
import {
  createRandomMove,
  countDownTick,
  countDownStart,
  countDownClear
} from "../actions/gameAction";
import React from "react";
import { connect } from "react-redux";
class GameTime extends React.Component {
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.startTimer();
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
    let classes = "gt-game-time " + this.props.className;
    return <div className={classes}>{this.props.value}</div>;
  }
}

function mapStateToProps(state) {
  return {
    value: state.gameReducer.countDown.value,
    intervalId: state.gameReducer.countDown.intervalId
  };
}

function mapDispatchToProps(dispatch) {
  return {
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
)(GameTime);