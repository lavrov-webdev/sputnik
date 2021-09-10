import React from "react";
import Spinner from "../UI Components/Spinner";
import Pagination from "../commons/Pagination/Pagination";
import User from "./User";
import { UserType } from "../../types";

type PropsType = {
  isFetching: boolean,
  pageSize: number
  paginationClickHandler: (pageNumber: number) => void;
  currentPage: number,
  totalUsersCount: number,
  users: Array<UserType>,
  follow: (userId: number) => void,
  unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = (props) => {
  if (props.isFetching)
    return (
      <div className="mt-5 d-flex justify-content-center">
        <Spinner width="6rem" height="6rem" />
      </div>
    );

  return (
    <>
      <Pagination
        totalItems={props.totalUsersCount}
        pageSize={props.pageSize}
        paginationClickHandler={props.paginationClickHandler}
        currentPage={props.currentPage}
      />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.users.map((user) => (
          <User user={user} key={user.id} follow={props.follow} unfollow={props.unfollow}/>
        ))}
      </div>
    </>
  );
}

export default Users