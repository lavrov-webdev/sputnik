import React, { createRef } from "react";
import NewPostForm from "./NewPostForm";
import Post from "./Post/Post";

export default function MyPosts(props) {
  const submitFormHandler = (formData) => {
    props.addPost(formData.postText)
  };

  return (
    <div className="col-12 mt-5">
      <NewPostForm onSubmit={submitFormHandler}/>
      <div className="mt-4">
        <h3>My posts</h3>
        {props.profile.posts.map((post) => (
          <Post key={post.id} likesCount={post.id} postText={post.text} />
        ))}
      </div>
    </div>
  );
}
