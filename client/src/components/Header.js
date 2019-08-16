import React from 'react';
import LogoTitle from '../subcomponents/LogoTitle';
import CircleButton from '../subcomponents/CircleButton';
import './Header.css';
import { Container, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col className="headerLogo" lg={3} md={3}>
                        <LogoTitle text="ZPF Caro" />
                    </Col>
                    <Col className="headerIcon" lg={7} md={7}>
                        <CircleButton type="profile" className="icon" />
                        <CircleButton type="rules" className="icon" />
                        <CircleButton type="info" className="icon" />
                        <CircleButton type="settings" className="icon" />
                        <CircleButton type="logout" className="icon" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;