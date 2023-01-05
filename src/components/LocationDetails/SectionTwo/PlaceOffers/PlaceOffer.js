import classes from "./PlaceOffer.module.css";
import React from "react";

const PlaceOffer = (props) => {
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={customClass}>
      <div className={classes.logo}>
        <img src={props.source} />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
};

export default PlaceOffer;
