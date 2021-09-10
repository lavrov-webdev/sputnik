import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { Textarea } from "../commons/FormControls/FormControls";
import { maxLength, required } from "../../utils/validators/validators";

const maxLength100 = maxLength(100);

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="row justify-content-end">
        <div className="form-group">
          <Field
            component={Textarea}
            validate={[required, maxLength100]}
            name='messageBody'
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder='How are u'
          ></Field>
        </div>
        <div className="col-2 mt-2">
          <button
            type="submit"
            className="btn btn-primary w-100 p-2"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default reduxForm({form: 'newMessage'})(NewMessageForm)
