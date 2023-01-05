import React, { useState } from "react";
import classes from "./CalenderBtns.module.css";
import CalenderBtn from "./CalenderBtn";
const CalenderBtns = (props) => {
  const [add, setAdd] = useState(true);
  const [flexible, setFlexible] = useState(false);
  const addHandler = () => {
    setAdd((prev) => !prev);
    setFlexible(false);
  };
  const flexHandler = () => {
    setAdd(false);
    setFlexible((prev) => !prev);
  };
  return (
    <div className={classes.main}>
      <CalenderBtn onClick={addHandler} active={add}>
        add dates
      </CalenderBtn>
      <CalenderBtn onClick={flexHandler} active={flexible}>
        i'm flexible
      </CalenderBtn>
    </div>
  );
};
export default CalenderBtns;
