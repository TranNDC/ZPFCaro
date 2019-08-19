import React from 'react';
import './Login.css';
import LogoTitle from "../subcomponents/LogoTitle";
import InputText from "../subcomponents/InputText";
import RectButton from "../subcomponents/RectButton";
import { Container } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = this.props.className + " login-container animated bounceInLeft slow";
        
        return (
            <Container fluid={true} className={className}>
                <div className="login-modal">
                    <div className="login-marginbot login-margintop">
                        <LogoTitle text="ZPF Caro" />
                    </div>
                    <div className="login-marginbot">
                        <InputText type="username" />
                    </div>
                    <div className="login-marginbot">
                        <InputText type="password" />
                    </div>
                    <div>
                        <RectButton text="Login" />
                    </div>
                </div>
            </Container>
        );
    }
}

export default Login;