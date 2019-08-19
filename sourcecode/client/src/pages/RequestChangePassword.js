import React from 'react';
import './RequestChangePassword.css';
import '../subcomponents/RectButton.css';
import LogoTitle from "../subcomponents/LogoTitle";
import InputText from "../subcomponents/InputText";
import { Container, Button } from 'react-bootstrap';

class RequestChangePassword extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = this.props.className + " rcp-container animated bounceInLeft slow";
        
        return (
            <Container fluid={true} className={className}>
                <div className="rcp-modal">
                    <div className="rcp-marginbot rcp-margintop">
                        <LogoTitle text="ZPF Caro" />
                    </div>
                    <div className="rcp-marginbot rcp-labeldiv">
                        <label className="rcp-label">ZPF Caro needs your registered Email to send you password reset instruction</label>
                    </div>
                    <div className="rcp-marginbot">
                        <InputText type="email" />
                    </div>
                    <div>
                        <Button className="rcp-smallfontsize rect-btn">request change password</Button>
                    </div>
                </div>
            </Container>
        );
    }
}

export default RequestChangePassword;