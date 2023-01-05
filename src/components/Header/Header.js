import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Title from "./Title";
import Search from "./Search";
import Signup from "./Signup";
import SignUpExpand from "./SignUpExpand";
import SearchExpand from "./SearchExpand";
import SearchExpandTitles from "./SearchExpandTitles";
import HeaderContext from "../Store/header-context";
import SignUpForm from "../SignUp/SignUpForm";
//////////////////////////////////////////
const Header = (props) => {
  const htx = useContext(HeaderContext);

  const customClass = `${classes.parent} ${props.className}`;
  return (
    <div className={customClass}>
      <div className={classes.main}>
        <Link to="/main" className={classes.link}>
          <Title className={classes.title}>airbnb</Title>
        </Link>
        {!htx.expand && <Search onClick={htx.headerExpandHandler} />}
        {htx.expand && <SearchExpandTitles></SearchExpandTitles>}
        <Signup className={classes.signup} onClick={htx.signUpHandler} />
      </div>
      <SearchExpand className={classes.search__expand} />
      {htx.onSignUp && <SignUpExpand />}
      {htx.signUpForm && <SignUpForm />}
    </div>
  );
};
export default Header;
