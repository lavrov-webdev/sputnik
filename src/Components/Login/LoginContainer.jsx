import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth-reducer";
import LoginPage from "./Login";

class LoginContainer extends React.Component {
  render() {
    return <LoginPage {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
