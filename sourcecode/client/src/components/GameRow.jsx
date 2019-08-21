import { connect } from "react-redux";
import { placePattern } from "../actions/gameAction";
import GameCell from "../subcomponents/GameCell";
import React from "react";

class GameRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handlePlacePattern = this.handlePlacePattern.bind(this)
  }
  handlePlacePattern(x, y, pattern) {
    this.props.placePattern(x, y, pattern);
  }

  render() {
    let classes =
      "gc-game-cell d-flex justify-content-center align-content-center " +
      this.props.className +
      " " +
      this.props.pattern;

    let cells = [];

    for (let i = 0; i < this.props.size; i++) {
      let tmp = (
        <td onClick={() => this.handlePlacePattern(i, this.props.index, "o")}>
            <GameCell
              pattern={this.props.gameBoard[this.props.index][i].pattern}
            >{this.props.gameBoard[this.props.index][i].pattern}</GameCell>
        </td>
      );
      cells.push(tmp);
    }

    return <tr className="gb-row">{cells}</tr>;
  }
}

function mapStateToProps(state, index) {
  return {
    gameBoard: state.gameReducer.gameBoard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    placePattern(x, y, pattern) {
      dispatch(placePattern(x, y, pattern));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameRow);
