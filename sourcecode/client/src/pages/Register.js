import React from 'react';
import './Register.css';
import '../subcomponents/RectButton.css';
import LogoTitle from "../subcomponents/LogoTitle";
import InputText from "../subcomponents/InputText";
import { Container, Button } from 'react-bootstrap';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = this.props.className + " register-container animated bounceInLeft slow";
        
        return (
            <Container fluid={true} className={className}>
                <div className="register-modal">
                    <div className="register-marginbot register-margintop">
                        <LogoTitle text="ZPF Caro" />
                    </div>
                    <div className="register-marginbot">
                        <InputText type="username" />
                    </div>
                    <div className="register-marginbot">
                        <InputText type="password" />
                    </div>
                    <div className="register-marginbot">
                        <InputText type="confirmedpassword" />
                    </div>
                    <div className="register-marginbot">
                        <InputText type="email" />
                    </div>
                    <div className="register-marginbot">
                        <InputText type="displayedname" />
                    </div>
                    <div>
                        <Button className="rect-btn">register</Button>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Register;