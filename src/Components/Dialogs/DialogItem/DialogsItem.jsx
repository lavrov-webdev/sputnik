import React from "react";
import { NavLink } from "react-router-dom";

export default function DialogsItem(props) {
  return (
    <div>
      <NavLink
        className="list-group-item list-group-item-action p-2"
        to={`/dialogs/${props.id}`}
      >
        {props.name}
      </NavLink>
    </div>
  );
}
