import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: !state.isFetching
      }
    default:
      return state;
  }
};

export const setUserData = ({ id, login, email, isAuth }) => {
  return {
    type: SET_USER_DATA,
    data: {
      id,
      login,
      email,
      isAuth,
    },
  };
};

export const toggleIsFetching = () => ({
  type: TOGGLE_IS_FETCHING,
})

export const authUser = () => (dispatch) => {
  authAPI.auth().then((data) => {
    dispatch(setUserData({ ...data, isAuth: data.resultCode === 0 }));
  });
};

export const loginUser = (email, password, rememberMe) => (dispatch) => {
  dispatch(toggleIsFetching())
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setUserData({id: response.data.userId, login: 'login', email, password}))
    }
    dispatch(toggleIsFetching())
  });
};

export default authReducer;
