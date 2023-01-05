import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import airbnb from "../../images/airbnb.png";
import home from "../../images/home2.png";
import HeaderContext from "../Store/header-context";
import SignUpForm from "../SignUp/SignUpForm";
const NavBar = (props) => {
  const htx = useContext(HeaderContext);
  const clickHandler = () => {
    htx.signUpFormHandler();
  };
  const customClass = `${classes.header} ${props.className}`;
  return (
    <React.Fragment>
      <nav className={customClass}>
        <Link to="/main">
          <img src={airbnb} />
        </Link>
        <div className={classes.ready__toAirbnb}>
          <h3>Ready to Airbnb ?</h3>
          <button className={classes.airbtn} onClick={clickHandler}>
            <img src={home} />
            Airbnb Setup
          </button>
        </div>
      </nav>
      {htx.signUpForm && <SignUpForm />}
    </React.Fragment>
  );
};

export default NavBar;
