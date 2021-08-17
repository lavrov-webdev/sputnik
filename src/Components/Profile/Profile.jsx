import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Redirect } from "react-router-dom";

export default function Profile(props) {
  if (!props.isAuth) return <Redirect to="/login" />;

  return (
    <div className="row">
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
}
