const ADD_POST = "ADD_POST",
  UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (value) => ({
  type: UPDATE_NEW_POST_TEXT,
  value,
});

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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
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
