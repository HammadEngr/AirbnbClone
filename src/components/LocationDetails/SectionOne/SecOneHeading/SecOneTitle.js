import React from "react";
import classes from "./SecOneTitle.module.css";
const SecOneTitle = (props) => {
  const customClass = `${classes.title} ${props.className}`;
  return (
    <div className={customClass}>
      <h1>{props.children}</h1>
    </div>
  );
};

export default SecOneTitle;
