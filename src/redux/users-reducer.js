import { usersAPI, followAPI } from "../api/api";

const UNFOLLOW = "UNFOLLOW",
  FOLLOW = "FOLLOW",
  SET_USERS = "SET_USERS",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
  TOGGLE_ISFETCHING = "TOGGLE_ISFETCHING",
  TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, followed: true };
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, followed: false };
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOGGLE_ISFETCHING:
      return {
        ...state,
        isFetching: action.value,
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      const tempusers = state.users.map((u) =>
        u.id != action.id ? u : { ...u, followingInProgress: action.value }
      );
      return {
        ...state,
        users: tempusers,
      };
    default:
      return state;
  }
};

export const acceptFollow = (userId) => ({ type: FOLLOW, userId });

export const acceptUnfollow = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setPage = (page) => ({ type: SET_CURRENT_PAGE, page });

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});

export const toggleIsFetching = (value) => ({ type: TOGGLE_ISFETCHING, value });

export const toggleFollowingInProgress = (id, value) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  id,
  value,
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getusers(currentPage, pageSize).then((data) => {
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
  });
};

export const unfollow = (id) => (dispatch) => {
  dispatch(toggleFollowingInProgress(id, true));
  followAPI.unfollow(id).then((resultCode) => {
    if (resultCode === 0) {
      dispatch(acceptUnfollow(id));
    }
    dispatch(toggleFollowingInProgress(id, false));
  });
};

export const follow = (id) => (dispatch) => {
  console.log("gollow");
  dispatch(toggleFollowingInProgress(id, true));
  followAPI.follow(id).then((resultCode) => {
    if (resultCode === 0) {
      dispatch(acceptFollow(id));
    }
    dispatch(toggleFollowingInProgress(id, false));
  });
};

export default usersReducer;
