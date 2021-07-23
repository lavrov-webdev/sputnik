import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Aside from "./Components/Aside/Aside";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";

const App = ({ state, addPost }) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="row">
          <Aside />
          <main className="col-10">
            <Route
              path="/profile"
              render={() => (
                <Profile addPost={addPost} state={state.profilePage} />
              )}
            />
            <Route
              path="/dialogs"
              render={() => <Dialogs state={state.dialogsPage} />}
            />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
