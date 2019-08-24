import React from 'react';
import './Homepage.css';
import '../subcomponents/RectButton.css';
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import LeaderBoard from "../components/LeaderBoard";
import GameRooms from "../components/GameRooms";
import CreateRoom from "../components/CreateRoom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import {isAuthenticated} from "../utils/storageUtil";
import {Redirect} from "react-router-dom";
import { loadUserInfo } from "../actions/userAction";
import { loadGameRooms, initGameRoom } from "../actions/roomAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.loadUserInfo(this.props.history);
        // await loadGameRooms(this.props.history);
        this.props.initGameRoom();
    } 

    render() {
        if (!isAuthenticated()) {
            return <Redirect to="/login" />;
          }
        let className = this.props.className
        return (
            <Container fluid={true} className={className}>
                <Header />
                <Row className="hp-row">
                    <Col xs="8" className="hp-padRight">
                        <GameRooms />
                    </Col>
                    <Col xs="4" className="hp-padLeft">
                        <UserInfo 
                        avatar={this.props.user.avatar} 
                        type1="displayedname" 
                        displayedname={this.props.user.displayedName} 
                        type2="points" 
                        points={this.props.user.points} 
                        type3="winningrate" 
                        winningrate={this.props.user.winningRate}
                        type4="windrawlose" 
                        wins={this.props.user.winCount} 
                        draws={this.props.user.drawCount}
                        loses={this.props.user.loseCount} />
                        <LeaderBoard className="hp-margintop"/>
                        <CreateRoom/>
                        <Button className="hp-rectbtn rect-btn">play with npc</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state, index) {
    return {
        user: state.userReducer
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      loadUserInfo(history) {
        return dispatch(loadUserInfo(history));
      },
      loadGameRooms(history) {
        return dispatch(loadGameRooms(history));
      },
      initGameRoom() {
        return dispatch(initGameRoom());
      }
    };
  }
  
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Homepage)
  );
  