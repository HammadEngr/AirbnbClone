import React from "react";
import classes from "./SignupBtn.module.css";
/////////////////////////////////////////////
const SignupBtn = (props) => {
  const customClass = `${props.className} ${classes.signup__btn}`;
  const clickHandler = () => {
    props.onClick();
  };
  return (
    <button className={customClass} onClick={clickHandler}>
      <div className={classes.btn__lines}>
        <div className={classes.btn__line}></div>
        <div className={classes.btn__line}></div>
        <div className={classes.btn__line}></div>
      </div>
      <div className={classes.user}></div>
    </button>
  );
};
export default SignupBtn;
