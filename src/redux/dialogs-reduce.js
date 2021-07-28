const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT",
  ADD_MESSAGE = "ADD_MESSAGE";

const dialogsReducer = (state, action) => {
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
