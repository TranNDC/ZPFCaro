import React from 'react';
import './Settings.css';
import '../subcomponents/RectButton.css';
import '../subcomponents/CircleButton.css';
import LogoTitle from "../subcomponents/LogoTitle";
import Slider from "../subcomponents/Slider";
import { Modal, Button } from 'react-bootstrap';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showSettingsModal: false };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal() {
        this.setState({ showSettingsModal: false });
    }

    openModal() {
        this.setState({ showSettingsModal: true });
    }

    render() {
        return (
            <>
                <Button className="h-icon circleButton fa fa-cog" onClick={this.openModal}></Button>

                <Modal show={this.state.showSettingsModal} onHide={this.closeModal} className="set-heightmodal">
                    <div className="set-marginbot set-margintop">
                        <LogoTitle text="SETTINGS" />
                    </div>
                    <Slider type="Sounds" className="set-littemarginbot"/>
                    <Slider type="Music" className="set-marginbot"/>
                    <div>
                        <Button className="rect-btn text-black small-width background-gray" onClick={this.closeModal}>back</Button>
                    </div>
                </Modal>
            </>
        );
    }
}

export default Settings;