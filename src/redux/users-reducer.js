const UNFOLLOW = "UNFOLLOW",
  FOLLOW = "FOLLOW",
  SET_USERS = "SET_USERS",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
  TOGGLE_ISFETCHING = "TOGGLE_ISFETCHING";

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
          if (u.id === action.userId) return { ...u, follow: true };
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, follow: false };
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      debugger;
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
    default:
      return state;
  }
};

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});

export const toggleIsFetching = (value) => ({
  type: TOGGLE_ISFETCHING,
  value,
});

export default usersReducer;
