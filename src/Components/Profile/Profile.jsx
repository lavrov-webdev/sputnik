import React from "react";
import Banner from "./Banner/Banner";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile() {
  return (
    <div className="row g-0">
      <Banner />
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}
