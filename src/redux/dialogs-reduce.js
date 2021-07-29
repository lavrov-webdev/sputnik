const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT",
  ADD_MESSAGE = "ADD_MESSAGE";

export const updateNewMessageTextActionCreator = (value) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  value,
});

export const addNewMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.value;
      return state;
    case ADD_MESSAGE:
      state.messagesData.push({
        id: 5,
        message: state.newMessageText,
      });
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;
