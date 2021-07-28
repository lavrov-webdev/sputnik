import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";

let renderEntire = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App dispatch={store.dipatch.bind(store)} state={store.getSate()} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntire();

store.subscribe(renderEntire);

reportWebVitals();
