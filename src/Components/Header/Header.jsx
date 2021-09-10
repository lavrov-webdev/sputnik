import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";

export default function Header({ isAuth, logoutUser }) {

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
            onClick={logoutUser}
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
