import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserData } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || 2;
    this.props.getUserData(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = { getUserData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
