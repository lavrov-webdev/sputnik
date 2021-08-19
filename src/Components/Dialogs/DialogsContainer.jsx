import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { sendMessage, updateNewMessageText } from "../../redux/dialogs-reduce";
import Dialogs from "./Dialogs";



const withRedirectDialogs = WithAuthRedirect(Dialogs)

let mapStateToProps = (state) => ({
  dialogs: state.dialogs,

});

let mapDispatchToProps = {
  sendMessage,
  updateNewMessageText,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
