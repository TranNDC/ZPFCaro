import React from "react";
import "./Login.css";
import "../subcomponents/RectButton.css";
import LogoTitle from "../subcomponents/LogoTitle";
import InputText from "../subcomponents/InputText";
import { Container, Button } from "react-bootstrap";
import { login } from "../actions/userAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getJwtFromStorage } from "../utils/storageUtil";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    if (getJwtFromStorage() && getJwtFromStorage() != "")
      this.props.history.push("/");
    this.state = {};
    this.handleChangeConfirmedpassword = this.handleChangeConfirmedpassword.bind(
      this
    );
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputState = this.clearInputState.bind(this);
  }

  render() {
    let className =
      this.props.className + " login-container animated bounceInLeft slow";

    return (
      <Container fluid={true} className={className}>
        <form onSubmit={this.handleSubmit} className="login-modal">
          <div className="login-marginbot login-margintop">
            <LogoTitle text="ZPF Caro" />
          </div>
          <div className="login-error-message">{this.state.error}</div>
          <div className="login-marginbot">
            <InputText
              onChangeValue={this.handleChangePassword}
              type="password"
              value={this.state.password}
            />
          </div>
          <div className="login-marginbot">
            <InputText
              pattern={encodeURI(this.state.password)}
              onChangeValue={this.handleChangeConfirmedPassword}
              type="confirmedpassword"
              value={this.state.confirmedPassword}
            />
          </div>
          <div>
            <Button type="submit" className="rect-btn">
              Update
            </Button>
          </div>
        </form>
      </Container>
    );
  }

  async handleSubmit(e) {
    e.preventDefault();
    let coppyState = { ...this.state };
    let data = {
      authentication: this.props.match.params.authentication,
      password: coppyState.password
    };
    let errorMessage = await this.props.ResetPassword(data, this.props.history);
    this.setState({ error: errorMessage });
    this.clearInputState();
  }

  handleChangePassword(value) {
    this.setState({ password: value });
  }

  handleChangeConfirmedpassword(value) {
    this.setState({ confirmedPassword: value });
  }
}

function mapStateToProps(state, index) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    resetPassword(data) {
      return dispatch(resetPassword(data));
    }
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResetPassword)
);
