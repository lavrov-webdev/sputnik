import React from "react";
import { NavLink } from "react-router-dom";
import userPhotoPlaceholder from "../../assets/images/user-placeholder.jpeg";
import { UserType } from "../../types";

type PropsType = {
  user: UserType,
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
}

const User: React.FC<PropsType> = ({user, follow, unfollow}) => {
  return (
    <div className="col">
      <div className="card h-100 p-3">
        <NavLink className="p-3" to={`/profile/${user.id}`}>
          <img
            src={user.photos.large ? user.photos.large : userPhotoPlaceholder}
            className="card-img-top"
          />
        </NavLink>
        <div className="card-body">
          <NavLink
            className="link-dark text-decoration-none"
            to={`/profile/${user.id}`}
          >
            <h5 className="card-title">{user.name}</h5>
          </NavLink>
          <h6 className="card-subtitle text-muted">{user.status}</h6>

          {user.followed ? (
            <button
              className="btn btn-danger mt-3"
              onClick={() => {
                unfollow(user.id);
              }}
              disabled={user.followingInProgress}
            >
              Unfollow
            </button>
          ) : (
            <button
              className="btn btn-success mt-3"
              onClick={() => {
                follow(user.id);
              }}
              disabled={user.followingInProgress}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default User