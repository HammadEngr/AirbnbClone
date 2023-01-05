import classes from "./HostTitle.module.css";
import React from "react";

const HostTitle = (props) => {
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={customClass}>
      <h1>{props.children}</h1>
    </div>
  );
};

export default HostTitle;
