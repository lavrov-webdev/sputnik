import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduce";
import sidebarReducer from "./sidebar-reduce";

const ADD_POST = "ADD_POST",
  UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT",
  UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT",
  ADD_MESSAGE = "ADD_MESSAGE";

let store = {
  _state: {
    profilePage: {
      postData: [
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
    },
    dialogsPage: {
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How r u" },
        { id: 3, message: "Nice" },
        { id: 4, message: "What about you?" },
      ],
      dialogsData: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Anna" },
        { id: 3, name: "Max" },
        { id: 4, name: "Jose" },
        { id: 5, name: "Bob" },
      ],
      newMessageText: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getSate() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dipatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber();
  },
};

export default store;

window.store = store;

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (value) => ({
  type: UPDATE_NEW_POST_TEXT,
  value,
});

export const updateNewMessageText = (value) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  value,
});

export const addNewMessage = () => ({
  type: ADD_MESSAGE,
});
