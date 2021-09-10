import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { LoginDataType } from "../../types";
import LoginPage from "./Login";

type MapStateToPropsType = {
  isFetching: boolean,
  isAuth: boolean,
  capthcaURL: string | null
}

type MapDispatchTopPropsType = {
  loginUser: (data: LoginDataType) => void
}

type PropsType = MapStateToPropsType & MapDispatchTopPropsType

class LoginContainer extends React.Component<PropsType> {
  render() {
    return <LoginPage {...this.props} />
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isFetching: state.auth.isFetching,
  isAuth: state.auth.isAuth,
  capthcaURL: state.auth.capthcaURL
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
