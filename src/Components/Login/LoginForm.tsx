import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { Field } from "redux-form";
import { Input } from "../commons/FormControls/FormControls";
import Spinner from "../UI Components/Spinner";
import { minLength, required } from "../../utils/validators/validators";
import classes from "./Login.module.scss";
import cn from "classnames";
import { LoginDataType } from "../../types";

const minLen3 = minLength(3);

type PropsType = {
  isFetching: boolean,
  capthcaURL: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginDataType, PropsType> & PropsType> = ({ handleSubmit, isFetching, error, capthcaURL }) => {
  return (
    <form onSubmit={handleSubmit}>
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
            validate={[required]}
            id="email"
            placeholder="name@example.com"
            component={Input}
            name="email"
          />
        </div>
        <div className="col-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <Field
            component={Input}
            validate={[required, minLen3]}
            type="password"
            name="password"
            className="form-control"
            id="password"
          />
        </div>

        <div className="col-4 d-flex align-items-end">
          <button
            disabled={isFetching}
            type="submit"
            className="btn btn-success w-100"
          >
            {!isFetching ? (
              "Login"
            ) : (
              <Spinner width="1rem" height="1rem" style="text-light" />
            )}
          </button>
        </div>
        <div className="col-12 d-flex align-items-center justify-content-end mt-2 input-group input-group-lg">
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
        {capthcaURL && (
          <>
            <div className="col-4 mt-2">
              <img src={capthcaURL} />
            </div>
            <div className="col-8 mt-2">
              <Field
                type="text"
                name="captcha"
                component={Input}
                validate={[required]}
                className="form-control"
              />
            </div>
          </>
        )}
        <div
          className={cn("col-12", classes.loginError, {
            [classes.active]: error,
          })}
        >
          <div className="alert alert-danger text-center">{error}</div>
        </div>
      </div>
    </form>
  );
};

export default reduxForm<LoginDataType, PropsType>({ form: "login" })(LoginForm);