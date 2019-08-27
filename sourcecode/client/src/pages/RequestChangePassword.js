import React from 'react';
import './RequestChangePassword.css';
import '../subcomponents/RectButton.css';
import LogoTitle from "../subcomponents/LogoTitle";
import InputText from "../subcomponents/InputText";
import { Container, Button } from 'react-bootstrap';
import {forgotPassword} from '../actions/userAction'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class RequestChangePassword extends React.Component {
  constructor(props) {
    super(props);
    if(getJwtFromStorage() && getJwtFromStorage()!="")
      this.props.history.push('/');
  }

  render() {

    let messageClassName = "rcp-label "+emailType;
    let className =
      this.props.className + " rcp-container animated bounceInLeft slow";

    return (
      <Container fluid={true} className={className}>
        <div className="rcp-modal">
          <div className="rcp-marginbot rcp-margintop">
            <LogoTitle text="ZPF Caro" />
          </div>
          <div className="rcp-marginbot rcp-labeldiv">
            <label className="rcp-label">
              ZPF Caro needs your registered Email to send you password reset
              instruction
            </label>
          </div>
          <label className={messageClassName}>
              {this.state.emailMessage}
            </label>
          <InputText
            value={this.state.email}
            onChangeValue={this.handleChangeEmail}
            type="email"
          />
          <div>
            <Button className="rcp-smallfontsize rect-btn">
              request change password
            </Button>
          </div>
        </div>
      </Container>
    );
  }

  async handleSubmit(e) {
    e.preventDefault();
    let coppyState = { ...this.state };
    let email = {
      email: coppyState.email
    };
    let message = await this.props.forgotPassword(email, this.props.history);
    this.setState({ error: errorMessage });

    this.setState({ emailMessage: message.message });
    this.setState({ emailType: message.type });
    if (message.type == "success") {
      this.setState({
        emailMessage:
          "A message with username and a link to reset your password has been sent to your email."
      });
    }
    if (message.type == "error") {
      this.setState({
        emailMessage:
          "No e-mail address matches your entry. Make sure you entered the correct e-mail address."
      });
    }
  }

  handleChangeEmail(value) {
    this.setState({ email: value });
  }
}

function mapStateToProps(state, index) {
    return {};
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      forgotPassword(data) {
        return dispatch(forgotPassword(data));
      }
    };
  }
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(RequestChangePassword)
  );
  