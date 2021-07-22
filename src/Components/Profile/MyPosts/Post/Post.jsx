import React from "react";

export default function Post(props) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-2">
          <img src="" className="img-fluid rounded-start" alt="" />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <p className="card-text">
              {props.postText}
            </p>
            <div className="card-text">
              <div className="row g-0 align-items-end">
                <small className="col-9 text-muted">Last updated 3 mins ago</small>
                <span className="col-3 text-muted">{props.likesCount} Likes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
