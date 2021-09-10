import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile(props) {
  return (
    <div className="row">
      <ProfileInfo
        {...props}
        // updateProfileData={props.updateProfileData}
        // uploadProfilePhoto={props.uploadProfilePhoto}
        // isOwner={props.isOwner}
        // updateStatus={props.updateStatus}
        // status={props.status}
        // profile={props.profile}
      />
      <MyPostsContainer />
    </div>
  );
}
