import React from "react";
import classes from "./TileDescription.module.css";
const TileDescription = (props) => {
  return (
    <div className={classes.main}>
      <h3 className={classes.country}>{props.loc.city}</h3>
      <h4 className={classes.address}>{props.loc.area}</h4>
      <h4 className={classes.price}>{props.loc.price}</h4>
    </div>
  );
};

export default TileDescription;
