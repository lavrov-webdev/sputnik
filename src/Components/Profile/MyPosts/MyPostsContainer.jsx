import React from "react";
import { connect } from "react-redux";
import { actions } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  addPost: actions.addPost
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
