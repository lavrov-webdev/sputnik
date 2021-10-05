import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { getUsersSelector, getCurrentPAge, getIsFetching, getPageSize, getTotalUsersCount } from "../../redux/selectors/users-selectros";
import { UserType } from "../../types";
import { actions, follow, getUsers, unfollow } from "../../redux/users-reducer";
import Users from "./Users";

type MapStateToPropsType = {
  currentPage    : number,
  pageSize       : number,
  totalUsersCount: number,
  isFetching     : boolean,
  users          : Array<UserType>,
}

type MapDispatchToPropsType = {
  getUsers: (currentPage: number, pageSize: number) => void,
  setPage : (pageNumber: number) => void,
  unfollow: (userId: number) => void,
  follow  : (userId: number) => void,
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  paginationClickHandler(pageNumber: number): void {
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  users: getUsersSelector(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPAge(state),
  isFetching: getIsFetching(state),
});

const mapDispatchToProps = {
  follow,
  unfollow,
  setPage: actions.setPage,
  getUsers
};

export default connect<MapStateToPropsType, MapDispatchToPropsType, undefined, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer);
