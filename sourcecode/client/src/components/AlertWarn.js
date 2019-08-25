import React from 'react';
import './AlertWarn.css';
import '../subcomponents/RectButton.css';
import { Modal, Button } from 'react-bootstrap';

class AlertWarn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showAWModal: false};

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal() {
        this.setState({ showAWModal: false });
    }

    openModal() {
        this.setState({ showAWModal: true });
    }

    render() {
        let className = "alertwarn-heightmodal "
        let numBtn = 1
        if (this.props.numBtn == "2") numBtn = 2
        let msg = this.props.msg
        if (msg == null || msg.length == 0) msg = "Are you sure to quit the game? You will lose!"
        if (msg.length > 34) {
            className += "alertwarn-biggerheightmodal"
        }

        return (
            <>
                {/* --------------------------------
                    Button here if need 
                    -------------------------------- */}
                
                <Modal show={this.state.showAWModal} onHide={this.closeModal} className={className}>
                    <div className="alertwarn-marginbot alertwarn-margintop">
                        <img src={require('../media/warning.png')} alt="Warning img" className="alertwarn-imgStyle"/>
                    </div>
                    <div className="alertwarn-paddingbot alertwarn-labelHead">
                        <label className="aboutus-label">WARNING</label>
                    </div>
                    <div className="alertwarn-labelContent">
                        <label className="alertwarn-label">{msg}</label>
                    </div>
                    <div className="alertwarn-margintop">
                        {
                            (numBtn == 1) ? 
                            (
                                <Button className="rect-btn text-black small-width btn-for-modal" onClick={this.closeModal}>ok</Button>
                            ) : 
                            (
                                <>
                                <Button className="rect-btn text-black small-width background-gray btn-for-modal alertwarn-marginRight" onClick={this.closeModal}>cancel</Button>
                                <Button className="rect-btn text-black small-width btn-for-modal">ok</Button>
                                </>
                            )
                        }
                    </div>
                </Modal>
            </>
        );
    }
}

export default AlertWarn;