import React from "react";
import { Redirect } from "react-router-dom";
import { LoginDataType } from "../../types";
import LoginForm from './LoginForm'

type PropsType = {
  isFetching: boolean,
  isAuth: boolean,
  capthcaURL: string | null,
  loginUser: (data: LoginDataType) => void
}

const LoginPage: React.FC<PropsType> = (props) => {
  const onSubmit = (formData: LoginDataType) => {
    props.loginUser({ ...formData });
  };
  if (props.isAuth) return <Redirect to="/profile" />;
  return (
    <LoginForm
      capthcaURL={props.capthcaURL}
      isFetching={props.isFetching}
      onSubmit={onSubmit}
    />
  );
};

export default LoginPage;
