import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  follow,
  setPage,
  setTotalUsersCount,
  setUsers,
  unfollow,
  toggleIsFetching,
} from "../../redux/users-reducer";
import Users from "./Users";
import Spinner from "../UI Components/Spinner";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  paginationClickHandler(pageNumber) {
    this.props.setPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);
      });
  }

  render() {
    return (
      <>
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          paginationClickHandler={this.paginationClickHandler.bind(this)}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          isFetching={this.props.isFetching}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  pageSize: state.users.pageSize,
  totalUsersCount: state.users.totalUsersCount,
  currentPage: state.users.currentPage,
  isFetching: state.users.isFetching,
});

const mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setPage,
  setTotalUsersCount,
  toggleIsFetching,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
