import React from 'react';
import LogoTitle from '../subcomponents/LogoTitle';
import './Header.css';
import '../subcomponents/CircleButton.css';
import Settings from './Settings';
import Profile from './Profile';
import Aboutus from './Aboutus';
import GameRule from './GameRule';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    test() {
        alert("AA");
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-center" className="head-row">
                    <Col className="h-logo" xs={3}>
                        <LogoTitle text="ZPF Caro" />
                    </Col>
                    <Col className="h-iconCol" xs={9}>
                        <Profile />
                        <GameRule />
                        <Aboutus />
                        <Settings />
                        <Button className="h-icon circleButton fa fa-sign-out" title="Logout"></Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;