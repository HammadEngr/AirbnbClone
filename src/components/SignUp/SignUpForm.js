import React, { useContext } from "react";
import classes from "./SignUpForm.module.css";
import Modal from "../UI/Modal";
import close from "../../images/close.png";
import HeaderContext from "../Store/header-context";
const SignUpForm = (props) => {
  const htx = useContext(HeaderContext);
  const clickHandler = () => {
    htx.signUpFormCloseHandler();
  };
  const customClass = `${classes.main} ${props.className}`;
  return (
    <Modal>
      <div className={customClass}>
        <header className={classes.header}>
          <img src={close} onClick={clickHandler} />
          <h3>Login or Signup</h3>
        </header>
        <div className={classes.wrapper}>
          <div className={classes.form}>
            <h1>Welcome to Airbnb</h1>

            <label>Country/Region</label>
            <select></select>
            <label>Phone number</label>
            <input placeholder="+1 (xxx) xxxxxxx"></input>
            <p className={classes.note}>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply. Privacy Policy
            </p>
            <button className={classes.continue}>Continue</button>
            <div>
              <p>or</p>
            </div>
            <button className={classes.btn}>Continue with facebook</button>
            <button className={classes.btn}>Continue with Google</button>
            <button className={classes.btn}>Continue with Apple</button>
            <button className={classes.btn}>Continue with email</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpForm;
