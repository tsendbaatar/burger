import React, { Component } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import * as actions from "../../redux/action/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";

import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    error: "",
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword1 = (e) => {
    this.setState({ password1: e.target.value });
  };

  changePassword2 = (e) => {
    this.setState({ password2: e.target.value });
  };

  signup = () => {
    if (this.state.password1 === this.state.password2) {
      this.props.signupUser(this.state.email, this.state.password1);
    } else {
      this.setState({ error: "Нууц үг хоорондоо таарахгүй байна!!!" });
    }
  };

  render() {
    return (
      <div className={css.SignUp}>
        {this.props.userId && <Redirect to="/" />}
        <div>Мэдээлэлээ оруулна уу</div>
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        ></input>
        <input
          onChange={this.changePassword1}
          type="password"
          placeholder="Нууц үг оруулна уу"
        ></input>
        <input
          onChange={this.changePassword2}
          type="password"
          placeholder="Нууц үг давтан оруулна уу"
        ></input>
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}

        {this.props.firebaseError && (
          <div style={{ color: "red" }}>{this.props.firebaseError}</div>
        )}

        {this.props.saving && <Spinner />}
        <Button
          text="Бүртгүүлэх"
          btnType="Success"
          clicked={this.signup}
        ></Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saving: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
