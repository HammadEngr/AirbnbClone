import React from "react";
import classes from "./CalenderBtn.module.css";
const CalenderBtn = (props) => {
  const customClass = `${classes.btn} ${props.className} ${
    props.active && classes.active
  }`;
  return (
    <button className={customClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default CalenderBtn;
