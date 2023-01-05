import classes from "./GuestInfo.module.css";
import React from "react";

const GuestInfo = (props) => {
  return (
    <div className={classes.main}>
      <h3>{props.age}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default GuestInfo;
