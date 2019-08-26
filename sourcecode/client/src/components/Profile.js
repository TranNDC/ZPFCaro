import React from 'react';
import './Profile.css';
import '../subcomponents/RectButton.css';
import '../subcomponents/CircleButton.css';
import TitleModal from "../subcomponents/TitleModal";
import EditText from '../subcomponents/EditText';
import UserInfoInProfile from './UserInfoInProfile';
import { Modal, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
                <Button className="h-icon circleButton fa fa-user" onClick={this.openModal} title="Profile"></Button>

                <Modal show={this.state.showProfileModal} onHide={this.closeModal} className={classNameHeightmodal + " " + (this.state.showChangePassword ? "updateHeightModal" : "")}>
                    <TitleModal text="profile" className="prof-marginbot" />
                    <div className="prof-paddingbot">
                        <UserInfoInProfile
                        type1="username" 
                        username={this.props.user.username} 
                        type2="points" 
                        points={this.props.user.points} 
                        type3="ranking" 
                        ranking={this.props.user.ranking} 
                        type4="winningrate" 
                        winningrate={this.props.user.winningRate} />
                    </div>
                    <div className="prof-paddingbot">
                        <label className="prof-label prof-windrawlose">
                            <b className="prof-paddingright">&#123;</b>
                            <b className="prof-paddingright">Wins:</b>
                            {this.props.user.winCount}
                            <b className="prof-paddingleft prof-paddingright">Draws:</b>
                            {this.props.user.drawCount}
                            <b className="prof-paddingleft prof-paddingright">Loses:</b>
                            {this.props.user.loseCount}
                            <b className="prof-paddingleft">&#125;</b>
                        </label>
                    </div>
                    <div className="prof-marginbot">
                        <label className="prof-label">Displayed name</label>
                        <EditText type="displayedname" displayedname={this.props.user.displayedName} />
                    </div>
                    <div className="prof-marginbot">
                        <label className="prof-label">Email</label>
                        <EditText type="email" email={this.props.user.email} />
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
                        <Button className="rect-btn text-black small-width background-gray btn-for-modal prof-marginRight" onClick={this.closeModal}>back</Button>
                        <Button className="rect-btn text-black small-width btn-for-modal">update</Button>
                    </div>
                </Modal>
            </>
        );
    }
}

function mapStateToProps(state, index) {
    return {
        user: state.userReducer
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
    //   loadUserInfo(history) {
    //     return dispatch(loadUserInfo(history));
    //   },
    //   loadGameRooms(history) {
    //     return dispatch(loadGameRooms(history));
    //   },
    //   initGameRoom() {
    //     return dispatch(initGameRoom());
    //   }
    };
  }
  
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Profile)
  );
  