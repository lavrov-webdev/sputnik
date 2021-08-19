import React from "react";
import { connect } from "react-redux";
import { follow, setPage, unfollow, getUsers } from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  paginationClickHandler(pageNumber) {
    this.props.setPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
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
  setPage,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
