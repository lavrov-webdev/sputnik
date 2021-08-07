import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authUser } from "../../redux/auth-reducer";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.authUser();
  }

  render() {
    return (
      <Header isAuth={this.props.isAuth} setUserData={this.props.setUserData} />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
  authUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
