const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT",
  ADD_MESSAGE = "ADD_MESSAGE";

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
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.value,
      };
    }
    case ADD_MESSAGE: {
      const newMessageBody = state.newMessageText;
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 8, message: newMessageBody },
        ],
        newMessageText: "",
      };
    }
    default:
      return state;
  }
};

export const updateNewMessageText = (value) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  value,
});

export const sendMessage = () => ({
  type: ADD_MESSAGE,
});

export default dialogsReducer;
