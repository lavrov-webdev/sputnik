import React from "react";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import NewMessageForm from "./NewMessageForm";

export default function Dialogs(props) {

  const submithandler = (formData) => {
    props.sendMessage(formData.messageBody)
  }

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
          <div className="col-12"><NewMessageForm onSubmit={submithandler}/></div>
        </div>
      </div>
    </div>
  );
}
