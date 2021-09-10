import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLength,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../commons/FormControls/FormControls";

const maxLength300 = maxLength(300);

const NewPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className="row justify-content-end">
        <div className="form-group">
          <Field
            validate={[required, maxLength300]}
            component={Textarea}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="postText"
            placeholder="Today is your lucky day"
          />
        </div>
        <div className="col-2 mt-2">
          <button type="submit" className="btn btn-primary w-100 p-2">
            Publish
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({ form: "newPost" })(NewPostForm);
