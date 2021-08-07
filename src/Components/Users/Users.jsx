import React from "react";
import { NavLink } from "react-router-dom";
import userPhotoPlaceholder from "../../assets/images/user-placeholder.jpeg";
import Spinner from "../UI Components/Spinner";

export default function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pagesFirst = [];
  let pagesLast = [];
  for (let i = 1; i <= 10; i++) {
    pagesFirst.push(i);
  }
  for (let i = pagesCount - 9; i <= pagesCount; i++) {
    pagesLast.push(i);
  }
  let pages = [...pagesFirst, ...pagesLast];
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {pages.map((p) => (
            <li className={`page-item ${props.currentPage === p && "active"}`}>
              <a
                className="page-link"
                href="#"
                onClick={() => props.paginationClickHandler(p)}
              >
                {p}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {props.isFetching ? (
        <div className="mt-5 d-flex justify-content-center">
          <Spinner width="6rem" height="6rem" />
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {props.users.map((user) => (
            <div key={user.id} className="col">
              <div className="card h-100 p-3">
                <NavLink className="p-3" to={`/profile/${user.id}`}>
                  <img
                    src={
                      user.photos.large
                        ? user.photos.large
                        : userPhotoPlaceholder
                    }
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
                        props.unfollow(user.id);
                      }}
                      disabled={user.followingInProgress}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className="btn btn-success mt-3"
                      onClick={() => {
                        props.follow(user.id);
                      }}
                      disabled={user.followingInProgress}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
