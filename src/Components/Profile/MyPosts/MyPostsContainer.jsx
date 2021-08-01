import React from "react";
import { connect } from "react-redux";
import { addPost, updateNewPostText } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  updateNewPostText,
  addPost,
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
