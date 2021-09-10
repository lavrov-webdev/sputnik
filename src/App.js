import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { initApp } from "./redux/app-reducer";
import { connect } from "react-redux";

import "./App.css";
import Aside from "./Components/Aside/Aside";
import News from "./Components/News/News";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Spinner from "./Components/UI Components/Spinner";
import { withSuspense } from "./hoc/withSuspense";

const UsersContainer = React.lazy(() =>
  import("./Components/Users/UsersContainer")
);
const LoginContainer = React.lazy(() =>
  import("./Components/Login/LoginContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./Components/Dialogs/DialogsContainer")
);
const Music = React.lazy(() => import("./Components/Music/Music"));

class App extends React.Component {
  componentDidMount() {
    this.props.initApp();
  }
  render() {
    if (!this.props.initialized)
      return (
        <div className="d-flex align-items-center justify-content-center w-100 mt-5 p-5">
          <Spinner width="10rem" height="10rem" />
        </div>
      );

    return (
      <BrowserRouter>
        <div className="container">
          <HeaderContainer />
          <div className="row">
            <Aside />
            <main className="col-10">
              <Route path="/profile/:userId?" component={ProfileContainer} />
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
              <Route path="/users" component={withSuspense(UsersContainer)} />
              <Route path="/news" component={News} />
              <Route path="/music" component={withSuspense(Music)} />
              <Route path="/login" component={withSuspense(LoginContainer)} />
            </main>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const mapDispatchToProps = {
  initApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
