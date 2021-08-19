import React from "react";
import classes from "./ProfileInfo.module.css";
import Spinner from "../../UI Components/Spinner";
import userPhotoPlaceholder from "../../../assets/images/user-placeholder.jpeg";
import ProfileStatus from "./ProfileStatus";
export default function ProfileInfo({ profile, status, updateStatus }) {
  if (!profile) return <Spinner />;
  return (
    <>
      <div className="col-2">
        <img
          className={classes.profilePicture}
          src={
            profile.photos.large ? profile.photos.large : userPhotoPlaceholder
          }
        />
      </div>
      <div className="col-4">
        <ul className="list-group list-group-flush">
          <li className="list-group-item pt-0">
            <h5 className='text-capitalize'>{profile.fullName}</h5>
            <ProfileStatus updateStatus={updateStatus} statusText={status}/>
          </li>
          {Object.entries(profile.contacts).map(
            ([key, value]) =>
              value && (
                <li className="list-group-item">
                  <b>{key}:</b> <a href={value}>{value}</a>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="col-6">
        {profile.lookingForAJob && (
          <p>
            <b className="d-block">Looking for a job!</b>
            {profile.lookingForAJobDescription}
          </p>
        )}
      </div>
    </>
  );
}
