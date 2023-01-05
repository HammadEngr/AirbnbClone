import React from "react";
import classes from "./SearchBtn.module.css";
//////////////////////////////////////////////
const SearchBtn = (props) => {
  const clickHandler = () => {};
  const customClasses = `${props.className} ${classes.search__btn}`;
  return (
    <button className={customClasses} onClick={clickHandler}>
      {props.children}
    </button>
  );
};
export default SearchBtn;
