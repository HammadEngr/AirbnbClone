import React from "react";
import classes from "./Currency.module.css";
const Currency = (props) => {
  const clickHandler = () => {
    props.onClick(props.abbr);
  };
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={customClass} onClick={clickHandler} data-cur={props.abbr}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.detail}>
        <div className={classes.abbr}>{props.abbr}</div>
        <div className={classes.symbol}>{props.symbol}</div>
      </div>
    </div>
  );
};

export default Currency;
