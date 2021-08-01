import React from "react";
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
                <img
                  src={
                    user.photos.large ? user.photos.large : userPhotoPlaceholder
                  }
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle text-muted">{user.status}</h6>

                  <button
                    className={`mt-4 btn btn-${
                      user.follow ? "danger" : "success"
                    }`}
                    onClick={(e) =>
                      user.follow
                        ? props.unfollow(user.id)
                        : props.follow(user.id)
                    }
                  >
                    {user.follow ? "Unfollow" : "Follow"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
