import React from "react";
import classes from "./DetailsExpand.module.css";
import Modal from "../../../UI/Modal";
import close from "../../../../images/close.png";
const DetailsExpand = (props) => {
  const clickHandler = () => {
    props.isExpand(false);
  };
  const customClass = `${classes.main} ${props.className}`;
  return (
    <Modal>
      <div className={customClass}>
        <div className={classes.close}>
          <img src={close} onClick={clickHandler} />
        </div>
        <div className={classes.details}>
          <h3>About this space</h3>
          <p>
            This spacious modern family home boasting 5 bedrooms. The main
            bedroom ( en-suite) has a king-size bed, the remaining four bedrooms
            have queen-sized beds.
          </p>
          <p>
            Open plan kitchen and lounge area with fire place overlooking the
            mountains.
          </p>
          <p>The kitchen is fully equipped.</p>
        </div>
      </div>
    </Modal>
  );
};

export default DetailsExpand;
