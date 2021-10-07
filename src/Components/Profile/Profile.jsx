import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile(props) {
  return (
    <div className="row">
      <ProfileInfo
        {...props}
      />
      <MyPostsContainer />
    </div>
  );
}
