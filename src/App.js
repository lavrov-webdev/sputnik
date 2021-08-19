import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Aside from "./Components/Aside/Aside";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <HeaderContainer />
        <div className="row">
          <Aside />
          <main className="col-10">
            <Route path="/profile/:userId?" component={ProfileContainer} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" component={UsersContainer} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/login" component={LoginContainer} />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
