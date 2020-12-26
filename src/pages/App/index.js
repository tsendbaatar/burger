import React, { Component } from "react";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/Siderbar";
import OrderPage from "../OrderPage";
import { Route, Switch } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import SignUp from "../SignupPage";
import { connect } from "react-redux";
import Logout from "../../components/Logout";
import { Redirect } from "react-router-dom";
import * as actions from "../../redux/action/loginActions";
import * as signupActions from "../../redux/action/signupActions";

class App extends Component {
  state = {
    showSideBar: false,
    //    favorite: "N/A",
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      if (expireDate > new Date()) {
        //Hugatsaa ni duusaagui token bna avtomat logout hiine
        this.props.autoLogin(token, userId);
        // Token huchingui bolohod uldej bgaa hugatsaag tootsool ter hugatsaanii daraa avtomataar logout hiine
        this.props.autologoutAfterMillSec(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        //token hugatsaa duussan bna, logout hiine

        this.props.logout();
      }
    }
  };

  // choose = (orts) => {
  //   this.setState({ favorite: orts });
  // };

  render() {
    return (
      <div className="App">
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        ></SideBar>
        <main className={css.Content}>
          {this.props.userId ? (
            <Switch>
              <Route path="/logout" component={Logout} />

              <Route path="/orders" component={OrderPage} />
              <Route path="/ship" component={ShippingPage} />
              <Route path="/" component={BurgerPage} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LoginPage} />
              <Redirect to="/login" />
            </Switch>
          )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(signupActions.logout()),
    autologoutAfterMillSec: () =>
      dispatch(signupActions.autologoutAfterMillSec()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
