import React from 'react';
import './Homepage.css';
import '../subcomponents/RectButton.css';
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import LeaderBoard from "../components/LeaderBoard";
import GameRooms from "../components/GameRooms";
import CreateRoom from "../components/CreateRoom";
import { Container, Row, Col, Button } from 'react-bootstrap';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = this.props.className;
        
        return (
            <Container fluid={true} className={className}>
                <Header />
                <Row className="hp-row">
                    <Col xs="8" className="hp-padRight">
                        <GameRooms />
                    </Col>
                    <Col xs="4" className="hp-padLeft">
                        <UserInfo avatar={require("../media/avatar.png")} type1="displayedname" displayedname="Trần Kiến Quốc" type2="points" points="800000" type3="winningrate" winningrate="68" type4="windrawlose" wins="81315" draws="41123" loses="10092" />
                        <LeaderBoard className="hp-margintop"/>
                        <CreateRoom/>
                        <Button className="hp-rectbtn rect-btn">play with npc</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Homepage;