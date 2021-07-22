import React from "react";
import classes from "./Banner.module.css";

export default function Banner() {
  return (
    <div className="col-12 mb-4">
      <img
        className={classes.profileBanner}
        src="https://images.unsplash.com/photo-1617083935866-9eeba5edc0f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />
    </div>
  );
}
