import React from "react";
import classes from "./SecOneHostAddress.module.css";
const SecOneHostAddress = (props) => {
  const customClass = `${classes.main} ${props.className}`;
  return (
    <address className={customClass}>
      <span className={classes.segment}>{props.city}</span>
      <span>.</span>
      <span className={classes.segment}>{props.town}</span>
      <span>.</span>
      <span className={classes.segment}>{props.country}</span>
    </address>
  );
};

export default SecOneHostAddress;
