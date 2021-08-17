import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

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

export const authUser = () => (dispatch) => {
  authAPI.auth().then((data) => {
    dispatch(setUserData({ ...data, isAuth: data.resultCode === 0 }));
  });
};

export default authReducer;
