import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/action/signupActions";
import { Redirect } from "react-router-dom";
class Logout extends React.Component {
  componentDidMount = () => {
    this.props.logout();
  };
  render() {
    return (
      <div>
        <Redirect to="/login" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
