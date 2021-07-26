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
    },
  },
  getSate() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  addPost(text) {
    this._state.profilePage.postData.push({ id: 5, text });
    this._state.profilePage.newPostText = "";
    this._callSubscriber();
  },
  updateNewPostText(value) {
    this._state.profilePage.newPostText = value;
    this._callSubscriber();
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;

window.store = store;
