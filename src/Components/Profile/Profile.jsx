import React from "react";
import Banner from "./Banner/Banner";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile({ state, addPost, updateNewPostText }) {
  return (
    <div className="row g-0">
      <Banner />
      <ProfileInfo />
      <MyPosts
        newPostText={state.newPostText}
        postData={state.postData}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
}
