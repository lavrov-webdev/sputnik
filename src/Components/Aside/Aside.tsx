import React from "react";
import { NavLink } from "react-router-dom";
import calsses from "./Aside.module.css";
import cn from 'classnames'

export default function Aside() {
  return (
    <aside className="col-2">
      <nav className="navbar navbar-expand-lg navbar-light bg-light h-100 align-items-start">
        <div className="container-fluid sticky-top">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={cn('navbar-nav me-auto mb-2 mb-lg-0', [calsses.verticalNav])}
            >
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dialogs" aria-current="page">
                  Dialogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/news" aria-current="page">
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/music" aria-current="page">
                  Music
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users" aria-current="page">
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  );
}
