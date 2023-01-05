import React from "react";
import classes from "./SearchExpandTitleBtn.module.css";
////////////////////////////////////////////////////////
const SearchExpandTitleBtn = (props) => {
  const clickHandler = () => {
    props.onClick();
  };
  const customClass = `${props.className} ${classes.btn}`;
  return (
    <button
      className={`${customClass} ${props.valid && classes.btn__active}`}
      onClick={clickHandler}
    >
      {props.children}
    </button>
  );
};
export default SearchExpandTitleBtn;
