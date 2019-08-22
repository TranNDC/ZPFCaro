import React from 'react';
import './CreateRoom.css';
import '../subcomponents/RectButton.css';
import LogoTitle from "../subcomponents/LogoTitle";
import InputText from "../subcomponents/InputText";
import { Modal, Button } from 'react-bootstrap';

class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showCRModal: false };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal() {
        this.setState({ showCRModal: false });
    }

    openModal() {
        this.setState({ showCRModal: true });
    }

    render() {
        return (
            <>
                <Button className="hp-margintop hp-rectbtn rect-btn" onClick={this.openModal}>create new</Button>

                <Modal show={this.state.showCRModal} onHide={this.closeModal} className="cr-heightmodal">
                    <div className="cr-marginbot cr-margintop">
                        <LogoTitle text="CREATE ROOM" />
                    </div>
                    <div className="cr-marginbot">
                        <InputText type="roomname" maxLength={30}/>
                    </div>
                    <div className="cr-marginbot">
                        <InputText type="roompassword" maxLength={30}/>
                    </div>
                    <div className="cr-marginbot">
                        <InputText type="betpoints" />
                    </div>
                    <div>
                        <Button className="rect-btn text-black small-width background-gray cr-marginRight" onClick={this.closeModal}>back</Button>
                        <Button className="rect-btn text-black small-width">create</Button>
                    </div>
                </Modal>
            </>
        );
    }
}

export default CreateRoom;