const ADD_POST = "ADD_POST",
  UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

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

export default profileReducer;
