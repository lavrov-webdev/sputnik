import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";

export default function Header({ isAuth, setUserData }) {
  const logout = () => {
    setUserData({ id: null, login: null, email: null, isAuth: false });
  };

  return (
    <header className="p-3 row">
      <div className="col-3">
        <Logo />
      </div>
      <div className="col-9 d-flex justify-content-end align-items-center">
        {isAuth ? (
          <NavLink
            className="link-secondary text-decoration-none fs-5 fw-bold"
            to="/profile"
            onClick={logout}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            className="link-secondary text-decoration-none fs-5 fw-bold"
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
}
