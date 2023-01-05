import classes from "./VillaDetails.module.css";
import React from "react";

const VillaDetails = (props) => {
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={customClass}>
      <p className={classes.guests}>{`${props.guests} guests`}</p>
      <p>.</p>
      <p className={classes.bedrooms}>{`${props.bedrooms} bedrooms`}</p>
      <p>.</p>
      <p className={classes.beds}>{`${props.beds} beds`}</p>
      <p>.</p>
      <p className={classes.bath}>{`${props.baths} baths`}</p>
    </div>
  );
};

export default VillaDetails;
