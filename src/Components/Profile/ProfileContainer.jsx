import React, { Component } from "react";
import { connect } from "react-redux";
import {
	getUserData,
	getUserStatus,
	updateStatus,
	uploadProfilePhoto,
	updateProfileData,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
	refreshProfile() {
		let userId = this.props.match.params.userId || this.props.loginnedUserId;
		if (!userId) {
			this.props.hisory.push("/login");
		}
		this.props.getUserData(userId);
		this.props.getUserStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.userId !== prevProps.match.params.userId)
			this.refreshProfile();
	}

	render() {
		return (
			<Profile {...this.props} isOwner={!this.props.match.params.userId} />
		);
	}
}

const mapStateToProps = (state) => ({
	profile: state.profile.profile,
	status: state.profile.status,
	loginnedUserId: state.auth.id,
});

const mapDispatchToProps = {
	getUserData,
	getUserStatus,
	updateStatus,
	uploadProfilePhoto,
	updateProfileData,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	WithAuthRedirect
)(ProfileContainer);
