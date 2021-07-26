import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";

let renderEntire = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        state={store.getSate()}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntire();

store.subscribe(renderEntire);

reportWebVitals();
