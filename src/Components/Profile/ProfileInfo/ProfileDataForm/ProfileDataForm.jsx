import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../../commons/FormControls/FormControls";
import classes from "./ProfileDataForm.module.scss";

const ProfileDataForm = ({ closeModal, ...props }) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <h2 className="text-center">Edit profile</h2>
      <div className="row">
        <div className=" col-12 mt-3">
          <label className={classes.label}>
            <span>Full name</span>
            <Field component={Input} name="fullName" type="text" />
          </label>
        </div>
        <div className=" col-12  mt-3">
          <label className={classes.label}>
            <span>About me</span>
            <Field component={Textarea} name="aboutMe" />
          </label>
        </div>
        <div className=" col-12  mt-3">
          <Field
            className="form-check-input"
            type="checkbox"
            id="lopkjob"
            component="input"
            name="lookingForAJob"
          />
          <label className="form-check-label mx-2" htmlFor="lopkjob">
            Are you looking for a job?
          </label>
        </div>
        <div className=" col-12 mt-3">
          <Field
            component={Textarea}
            name="lookingForAJobDescription"
            placeholder="Looking for a job description"
          />
        </div>
        <div className="col-6">
          <label>
            <span>facebook</span>
            <Field component={Input} name='contacts.facebook'/>
          </label>
        </div>
        <div className="col-6">
          <label>
            <span>website</span>
            <Field component={Input} name='contacts.website'/>
          </label>
        </div>
        <div className="col-6">
          <label>
            <span>vk</span>
            <Field component={Input} name='contacts.vk'/>
          </label>
        </div>
        <div className="col-6">
          <label>
            <span>twitter</span>
            <Field component={Input} name='contacts.twitter'/>
          </label>
        </div>
        <div className="col-6">
          <label>
            <span>instagram</span>
            <Field component={Input} name='contacts.instagram'/>
          </label>
        </div>
        <div className="col-6">
          <label>
            <span>github</span>
            <Field component={Input} name='contacts.github'/>
          </label>
        </div>
        <div className="col-6">
          <label>
            <span>youtube</span>
            <Field component={Input} name='contacts.youtube'/>
          </label>
        </div>
        <div className="col-6">
          <label>
            <span>mainLink</span>
            <Field component={Input} name='contacts.mainLink'/>
          </label>
        </div>
        <div className="col-5 mt-3">
          <div className="btn btn-danger w-100" onClick={closeModal}>
            Back
          </div>
        </div>
        <div className="col-7 mt-3">
          <button type="submit" className="btn btn-success w-100">
            Edit
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({ form: "profileData" })(ProfileDataForm);
