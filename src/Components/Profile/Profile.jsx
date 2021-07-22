import React from "react";
import Banner from "./Banner/Banner";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile() {
  return (
    <div className="row g-0">
      <Banner />
      <ProfileInfo/>
      <MyPosts />
    </div>
  );
}
