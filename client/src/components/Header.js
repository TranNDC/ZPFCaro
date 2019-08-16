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
                    <Col className="h-logo" xs={3}>
                        <LogoTitle text="ZPF Caro" />
                    </Col>
                    <Col className="h-iconCol" xs={8}>
                        <CircleButton type="profile" className="h-icon" />
                        <CircleButton type="rules" className="h-icon" />
                        <CircleButton type="info" className="h-icon" />
                        <CircleButton type="settings" className="h-icon" />
                        <CircleButton type="logout" className="h-icon" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;