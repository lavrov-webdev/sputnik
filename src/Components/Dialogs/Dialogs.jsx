import React, { createRef } from "react";
import { NavLink } from "react-router-dom";

import DialogsItem from "./DialogItem/DialogsItem";

import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

export default function Dialogs({ state }) {
  const newMessageElement = createRef();

  const sendMessage = () => {
    const text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className="row g-5">
      <div className="col-12 col-md-4 border-end">
        <div className="row g-0 navbar-light">
          <ul className="list-group">
            {state.dialogsData.map((dialogLink) => (
              <DialogsItem name={dialogLink.name} id={dialogLink.id} />
            ))}
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="row g-0">
          {state.messagesData.map((message) => (
            <Message message={message.message} id={message.id} />
          ))}
        </div>
        <div className="row g-0 mt-4">
          <div className="col-12">
            <form>
              <div className="row justify-content-end">
                <div className="form-group">
                  <textarea
                    ref={newMessageElement}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-2 mt-2">
                  <button
                    onClick={sendMessage}
                    type="submit"
                    className="btn btn-primary w-100 p-2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
