import React, { useEffect } from "react";
import classes from "./ProfilePhoto.module.css";
import userPhotoPlaceholder from "../../../../assets/images/user-placeholder.jpeg";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProflePhoto = ({ large, isOwner, openModal, closeModal, profile, updateStatus, status}) => {
  useEffect(() => {
    window.addEventListener("keydown", closeModal);
    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  }, []);

  return (
    <div className="col-3">
      <div className={classes.profileImageWrapper}>
        <img
          className={classes.profilePicture}
          src={large ? large : userPhotoPlaceholder}
        />
        {isOwner && (
          <div onClick={openModal} className={classes.showModalButton}>
            Поменять фото
          </div>
        )}
      </div>
      <h5 className="text-capitalize mt-3 mb-1">
          {profile.fullName}
        </h5>
        <ProfileStatus
          isOwner={isOwner}
          updateStatus={updateStatus}
          statusText={status}
        />
    </div>
  );
};

export default ProflePhoto;
