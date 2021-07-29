import React from "react";
import { connect } from "react-redux";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reduce";

import Dialogs from "./Dialogs";

let mapStateToProps = (state) => ({
  dialogs: state.dialogs,
});

let mapDispatchToProps = (dispatch) => ({
  sendMessage: () => dispatch(addNewMessageActionCreator()),
  updateNewMessageText: (value) =>
    dispatch(updateNewMessageTextActionCreator(value)),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
