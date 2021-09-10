import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authUser, logoutUser } from "../../redux/auth-reducer";

class HeaderContainer extends Component {
  render() {
    return (
      <Header isAuth={this.props.isAuth} logoutUser={this.props.logoutUser} />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
  authUser,
  logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
