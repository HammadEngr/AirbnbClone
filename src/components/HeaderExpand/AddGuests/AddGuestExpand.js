import React from "react";
import classes from "./AddGuestExpand.module.css";
import GuestInfo from "./GuestInfo";
import GuestCount from "./GuestCount";

const AddGuestExpand = (props) => {
  return (
    <div className={classes.main}>
      <GuestInfo age={props.age} description={props.description} />
      <GuestCount
        guestType={props.guestType}
        incHandler={props.incHandler}
        decHandler={props.decHandler}
      />
    </div>
  );
};

export default AddGuestExpand;
