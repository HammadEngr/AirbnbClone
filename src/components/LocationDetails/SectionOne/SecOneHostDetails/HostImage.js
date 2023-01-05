import classes from "./HostImage.module.css";
import React from "react";
const HostImage = (props) => {
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={customClass}>
      <img src={props.image} />
    </div>
  );
};

export default HostImage;
