import React from "react";
import { NavLink } from "react-router-dom";

import DialogsItem from "./DialogItem/DialogsItem";

import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

export default function Dialogs() {
  const dialogsData = [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Anna" },
    { id: 3, name: "Max" },
    { id: 4, name: "Jose" },
    { id: 5, name: "Bob" },
  ];

  const messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How r u" },
    { id: 3, message: "Nice" },
    { id: 4, message: "What about you?" },
  ];

  return (
    <div className="row g-5">
      <div className="col-12 col-md-4 border-end">
        <div className="row g-0 navbar-light">
          <ul className="list-group">
            {dialogsData.map((dialogLink) => (
              <DialogsItem name={dialogLink.name} id={dialogLink.id} />
            ))}
          </ul>
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="row g-0">
          {messagesData.map((message) => (
            <Message message={message.message} id={message.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
