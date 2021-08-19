import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST",
  UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT",
  SET_USER_PROFILE = "SET_USER_PROFILE;",
  SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {
      id: 1,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 2,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 3,
      text: "With supporting text below as a natural lead-in to additional content.",
    },
    {
      id: 4,
      text: "With supporting text below as a natural lead-in to additional content.",
    },
  ],
  newPostText: "",
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let tempState = { ...state };
      tempState.posts = [...state.posts];
      tempState.posts.push({
        id: 5,
        text: tempState.newPostText,
      });
      tempState.newPostText = "";
      return tempState;
    }
    case UPDATE_NEW_POST_TEXT: {
      let tempState = { ...state };
      tempState.newPostText = action.value;
      return tempState;
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
      default:
      return state;
  }
};

export const addPost = () => ({
  type: ADD_POST,
});

export const updateNewPostText = (value) => ({
  type: UPDATE_NEW_POST_TEXT,
  value,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = status => ({
  type: SET_STATUS,
  status
})

export const getUserData = (id) => (dispatch) => {
  profileAPI.getProfile(id).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const getUserStatus = id => dispatch => {
  profileAPI.getStatus(id).then((data) => {
    dispatch(setStatus(data));
  });
}

export const updateStatus = status => dispatch => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
}


export default profileReducer;
