const ADD_MESSAGE = "/dialogs/ADD_MESSAGE";

type MessagesDataType = {
  id: number,
  message: string
}

type DialogsDataType = {
  id: number,
  name: string
}

type InitialStateType = {
  messagesData: Array<MessagesDataType>,
  dialogsData: Array<DialogsDataType>,
}

let initialState: InitialStateType = {
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
};

type DialogsReducerTypeAction = {
  type: typeof ADD_MESSAGE,
  messageBody: string
}

const dialogsReducer = (state = initialState, action: DialogsReducerTypeAction): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 8, message: action.messageBody },
        ],
      };
    }
    default:
      return state;
  }
};



export const sendMessage = (messageBody: string): DialogsReducerTypeAction => ({
  type: ADD_MESSAGE,
  messageBody
});

export default dialogsReducer;
