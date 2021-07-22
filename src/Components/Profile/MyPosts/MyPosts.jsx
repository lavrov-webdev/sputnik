import React from "react";
import Post from "./Post/Post";

export default function MyPosts() {

  const postData = [
    {id: 1, text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'},
    {id: 2, text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'},
    {id: 3, text: 'With supporting text below as a natural lead-in to additional content.'},
    {id: 4, text: 'With supporting text below as a natural lead-in to additional content.'},
  ]

  return (
    <div className="col-12 mt-5">
      <form>
        <div className="row justify-content-end">
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
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
        {postData.map(post => <Post likesCount={post.id} postText={post.text}/>)}
      </div>
    </div>
  );
}
