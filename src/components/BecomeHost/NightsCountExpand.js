import React from "react";
import classes from "./NightsCountExpand.module.css";
import close from "../../images/close.png";
import add from "../../images/add.png";
import minus from "../../images/minus.png";

const NightsCountExpand = (props) => {
  const closeHandler = () => {
    props.onCloseNights();
  };
  const customClass = `${classes.nights__form} ${props.className} ${
    props.nights ? classes.active : ""
  }`;
  return (
    <div className={customClass}>
      <div className={classes.header}>
        <img src={close} onClick={closeHandler} />
        <h4>How many nights ?</h4>
      </div>
      <div className={classes.nights__input}>
        <input
          className={classes.input__field}
          type="number"
          min={1}
          max={30}
          value={props.nightsCount}
          onChange={props.sliderChangeHandler}
        ></input>

        <label>{props.nightsCount > 1 ? "Nights" : "Night"}</label>
        <p className={classes.description}>
          15 nights booked on average if available all month
        </p>
        <button className={classes.submit}>Update your estimate</button>
      </div>
    </div>
  );
};

export default NightsCountExpand;
