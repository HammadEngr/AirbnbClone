import React from "react";
import classes from "./SecOneHostInfo.module.css";
const SecOneHostInfo = (props) => {
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={customClass}>
      <div>
        <img src={props.source} /> {props.rating}
      </div>
      <div>.</div>
      <div>{props.reviews} reviews</div>
      <div>.</div>
      <div>{props.rank}</div>
    </div>
  );
};

export default SecOneHostInfo;
