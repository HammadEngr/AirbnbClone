import classes from "./HostingExperience.module.css";
import React from "react";

const HostingExperience = (props) => {
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={customClass}>
      <div className={classes.logo}>
        <img src={props.source} />
      </div>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default HostingExperience;
