import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserData, getUserStatus, updateStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || 18719;
    this.props.getUserData(userId);
    this.props.getUserStatus(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  status: state.profile.status,
});

const mapDispatchToProps = { getUserData, getUserStatus, updateStatus };


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)
