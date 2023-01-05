import React from "react";
import classes from "./TypeItem.module.css";
const TypeItem = (props) => {
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={customClass} style={props.style}>
      <div className={classes.logo}>
        <img src={props.source} />
      </div>
      <h3 className={classes.title}>{props.title}</h3>
    </div>
  );
};
export default TypeItem;
