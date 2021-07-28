const ADD_POST = "ADD_POST",
  UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.postData.push({
        id: 5,
        text: state.newPostText,
      });
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.value;
      return state;
    default:
      return state;
  }
};

export default profileReducer;
