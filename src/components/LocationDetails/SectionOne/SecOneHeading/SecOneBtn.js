import React from "react";
import classes from "./SecOneBtn.module.css";
const SecOneBtn = (props) => {
  const clickHandler = () => {};
  const customClass = `${classes.btn} ${props.className}`;
  return (
    <button className={customClass} onClick={clickHandler}>
      <img src={props.source} />
      <a>{props.children}</a>
    </button>
  );
};

export default SecOneBtn;
