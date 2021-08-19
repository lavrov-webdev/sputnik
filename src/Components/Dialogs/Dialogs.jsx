import React from "react";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

export default function Dialogs(props) {
  const onSendMessage = (e) => {
    e.preventDefault();
    props.sendMessage();
  };

  return (
    <div className="row g-5">
      <div className="col-12 col-md-4 border-end">
        <div className="row g-0 navbar-light">
          <ul className="list-group">
            {props.dialogs.dialogsData.map((dialogLink) => (
              <DialogsItem
                key={dialogLink.id}
                name={dialogLink.name}
                id={dialogLink.id}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="row g-0">
          {props.dialogs.messagesData.map((message) => (
            <Message
              key={message.id}
              message={message.message}
              id={message.id}
            />
          ))}
        </div>
        <div className="row g-0 mt-4">
          <div className="col-12">
            <form>
              <div className="row justify-content-end">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={props.dialogs.newMessageText}
                    onChange={(e) => props.updateNewMessageText(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-2 mt-2">
                  <button
                    onClick={(e) => onSendMessage(e)}
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
