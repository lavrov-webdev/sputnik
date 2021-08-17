import React from "react";
import { connect } from "react-redux";
import { sendMessage, updateNewMessageText } from "../../redux/dialogs-reduce";

import Dialogs from "./Dialogs";

let mapStateToProps = (state) => ({
  dialogs: state.dialogs,
  isAuth: state.auth.isAuth,
});

let mapDispatchToProps = {
  sendMessage,
  updateNewMessageText,
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
