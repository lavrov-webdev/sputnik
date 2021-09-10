import React, { useState } from "react";
import classes from "./ProfileInfo.module.css";
import Spinner from "../../UI Components/Spinner";
import ProflePhoto from "./ProflePhoto/ProflePhoto";
import UploadPhotoForm from "./ProflePhoto/UploadPhotoForm";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  uploadProfilePhoto,
  updateProfileData
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);

  const submitProfileDataForm = formData => {
    updateProfileData(formData).then(responce => {
      if (responce) setModalIsOpen(false);
    })
  }

  const closeModal = (e) => {
    if (e.key === "Escape") setModalIsOpen(false);
  };
  const openModalPhoto = () => {
    setModalComponent(() => () => (
      <UploadPhotoForm
        closeModal={() => setModalIsOpen(false)}
        uploadFile={uploadProfilePhoto}
      />
    ));
    setModalIsOpen(true);
  };
  const openModalProfileData = () => {
    setModalComponent(() => () => (
      <ProfileDataForm initialValues={profile} closeModal={() => {setModalIsOpen(false);}} onSubmit={submitProfileDataForm}/>
    ));
    setModalIsOpen(true);
  }

  if (!profile) return <Spinner />;
  return (
    <>
      <ProflePhoto
        openModal={openModalPhoto}
        closeModal={closeModal}
        large={profile.photos.large}
        isOwner={isOwner}
        updateStatus={updateStatus}
        status={status}
        profile={profile}
      />
      <ProfileData openModal={openModalProfileData} isOwner={isOwner} profile={profile} />
      {modalIsOpen && (
        <div
          className={classes.modalWrapper}
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalIsOpen(false);
          }}
        >
          <div className={classes.modalInner}>{modalComponent()}</div>
        </div>
      )}
    </>
  );
}

export default ProfileInfo
