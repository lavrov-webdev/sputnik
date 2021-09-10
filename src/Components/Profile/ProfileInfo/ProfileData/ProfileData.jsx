import React from "react";
import classes from "./ProfileData.module.css";
import cn from "classnames";

export default function ProfileData({ profile, isOwner, openModal }) {
  const contacts = Object.entries(profile.contacts).filter(([key, value]) => value)
  return (
    <>
      <div className={cn("col-4", [classes.wrapper])}>
        <ul className="list-group list-group-flush pl-3">
          {contacts.map(
            ([key, value], index) =>
              value && (
                <li
                  key={key}
                  className={cn("list-group-item border-0", {
                    "pt-0": (index < 1),
                  })}
                >
                  <b>{key}:</b> <a href={value}>{value}</a>
                </li>
              )
          )}

          {profile.lookingForAJob && (
            <li className="list-group-item border-0">
              <p>
                <b className="d-block">Looking for a job!</b>
                {profile.lookingForAJobDescription}
              </p>
            </li>
          )}
          {isOwner && (
            <li className="list-group-item border-0">
              <div className={classes.settingsWrapper}>
                <button
                  onClick={openModal}
                  className={cn('btn btn-primary', [classes.settingsButton])}
                >
                  Setting
                </button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
