import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import Spinner from "../UI Components/Spinner";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="row">
        <div className="col-12 mb-4">
          <h1>Login</h1>
        </div>

        <div className="col-4">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <Field
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            component="input"
            name="email"
          />
        </div>
        <div className="col-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <Field
            component="input"
            type="password"
            name="password"
            className="form-control"
            id="password"
          />
        </div>

        <div className="col-4 d-flex align-items-end">
          <button disabled={props.isFetching} type="submit" className="btn btn-success w-100">
            {!props.isFetching ? 'Login' : <Spinner width="1rem" height="1rem" style="text-light" />}
          </button>
        </div>
        <div className="col-12 d-flex align-items-center justify-content-end mt-2">
          <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              value="remember"
              id="remember"
              component="input"
              name="remember"
            />
            <label className="form-check-label ml-2" htmlFor="remember">
              Remember me
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

const LoginFormRedux = reduxForm({ form: "login" })(LoginForm);

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    props.loginUser(formData.email, formData.password, formData.remember);
  };
  return <LoginFormRedux isFetching={props.isFetching} onSubmit={onSubmit} />;
};

export default LoginPage;
