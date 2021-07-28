import React, { createRef } from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import Post from "./Post/Post";

export default function MyPosts(props) {
  const { dispatch } = props;

  const newPostElement = createRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(addPostActionCreator());
  };

  return (
    <div className="col-12 mt-5">
      <form onSubmit={(e) => submitFormHandler(e)}>
        <div className="row justify-content-end">
          <div className="form-group">
            <textarea
              ref={newPostElement}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={props.newPostText}
              onChange={(e) =>
                dispatch(updateNewPostTextActionCreator(e.target.value))
              }
            />
          </div>
          <div className="col-2 mt-2">
            <button type="submit" className="btn btn-primary w-100 p-2">
              Publish
            </button>
          </div>
        </div>
      </form>
      <div className="mt-4">
        <h3>My posts</h3>
        {props.postData.map((post) => (
          <Post likesCount={post.id} postText={post.text} />
        ))}
      </div>
    </div>
  );
}
