import React from "react";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";
import SignupBtn from "./SignupBtn";
/////////////////////////////////////////
const Signup = (props) => {
  const customClass = `${props.className} ${classes.main}`;
  const clickHandler = () => {
    props.onClick();
  };
  return (
    <div className={customClass}>
      <h4 className={classes.host}>
        <Link to="/becomehost">Become a Host</Link>
      </h4>
      <SignupBtn onClick={clickHandler} />
    </div>
  );
};
export default Signup;
