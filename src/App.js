import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Aside from "./Components/Aside/Aside";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";

const App = ({ state, dispatch, store }) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="row">
          <Aside />
          <main className="col-10">
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
