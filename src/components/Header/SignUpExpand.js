import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUpExpand.module.css";
import SignUpForm from "../SignUp/SignUpForm";
import HeaderContext from "../Store/header-context";

const SignUpExpand = (props) => {
  const htx = useContext(HeaderContext);
  const clickHandler = () => {
    htx.signUpFormHandler();
  };
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={customClass}>
      <div className={classes.top}>
        <button className={classes.signup} onClick={clickHandler}>
          Signup
        </button>
        <button className={classes.login} onClick={clickHandler}>
          Login
        </button>
      </div>
      <div className={classes.bottom}>
        <button className={classes.login}>
          <Link to="/becomehost">Airbnb your home</Link>
        </button>
        <button className={classes.login}>Host an experience</button>
        <button className={classes.login}>Help</button>
      </div>
    </div>
  );
};

export default SignUpExpand;
