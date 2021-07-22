import React from "react";
import classes from "./ProfileInfo.module.css";

export default function ProfileInfo() {
  return (
    <>
      <div className="col-2">
        <img className={classes.profilePicture} src="./profile-picture.jpg" />
      </div>
      <div className="col-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item pt-0">
            <h5>Mark A.</h5>
          </li>
          <li className="list-group-item">
            Date of birth: <span>23 June</span>
          </li>
          <li className="list-group-item">City: Moscow</li>
          <li className="list-group-item">Education: MSU</li>
        </ul>
      </div>
    </>
  );
}
