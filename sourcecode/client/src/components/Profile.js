import React from 'react';
import './Profile.css';
import '../subcomponents/RectButton.css';
import '../subcomponents/CircleButton.css';
import LogoTitle from "../subcomponents/LogoTitle";
import EditText from '../subcomponents/EditText';
import UserInfoInProfile from './UserInfoInProfile';
import { Modal, Button } from 'react-bootstrap';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showProfileModal: false, showChangePassword: false};

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.toggleChangePassword = this.toggleChangePassword.bind(this);
    }

    closeModal() {
        this.setState({ showProfileModal: false });
    }

    openModal() {
        this.setState({ showProfileModal: true });
    }

    toggleChangePassword() {
        this.setState({showChangePassword: !this.state.showChangePassword });
    }

    render() {
        let classNameHeightmodal = "prof-heightmodal";

        return (
            <>
                <Button className="h-icon circleButton fa fa-user" onClick={this.openModal}></Button>

                <Modal show={this.state.showProfileModal} onHide={this.closeModal} className={classNameHeightmodal + " " + (this.state.showChangePassword ? "updateHeightModal" : "")}>
                    <div className="prof-marginbot prof-margintop">
                        <LogoTitle text="PROFILE" />
                    </div>
                    <div className="prof-marginbot">
                        <UserInfoInProfile avatar={require("../media/avatar.png")} type1="username" username="quoctk08" type2="points" points="800000" type3="ranking" ranking="172" type4="winningrate" winningrate="68" />
                    </div>
                    <div className="prof-marginbot">
                        <label className="prof-label prof-windrawlose"><b>Wins: </b>81315 | <b>Draws: </b>41123 | <b>Loses: </b>10092</label>
                    </div>
                    <div className="prof-marginbot">
                        <label className="prof-label">Displayed name</label>
                        <EditText type="displayedname" displayedname="Trần Kiến Quốc" />
                    </div>
                    <div className="prof-marginbot">
                        <label className="prof-label">Email</label>
                        <EditText type="email" email="Kienquoctran08@gmail.com" />
                    </div>
                    <div className="prof-changepassword">
                        <a href="#" onClick={this.toggleChangePassword} className="prof-btnlabel"><label className="prof-label">Change Password</label></a>
                        {   this.state.showChangePassword && 
                            <>
                            <EditText type="password" />

                            <div className="prof-margintop">
                                <label className="prof-label">New Password</label>
                                <EditText type="newpassword" />
                            </div>
                            </>
                        }
                    </div>
                    <div className="prof-margintop">
                        <Button className="rect-btn text-black small-width background-gray prof-marginRight" onClick={this.closeModal}>back</Button>
                        <Button className="rect-btn text-black small-width">update</Button>
                    </div>
                </Modal>
            </>
        );
    }
}

export default Profile;