import React from "react";
import classes from "./Search.module.css";
import SearchBtn from "./SearchBtn";
import searchIcon from "../../images/search-interface-symbol.png";
////////////////////////////////////////
const Search = (props) => {
  const clickHandler = () => {
    props.onClick();
  };
  return (
    <div className={classes.main} onClick={clickHandler}>
      <SearchBtn className={classes.btn}>AnyWhere</SearchBtn>
      <div className={classes.separator__line}></div>

      <SearchBtn className={classes.btn}>AnyWeek</SearchBtn>

      <div className={classes.separator__line}></div>

      <SearchBtn className={classes.btn}>Add Guests</SearchBtn>

      <button className={classes.searchBtn}>
        <img src={searchIcon}></img>
      </button>
    </div>
  );
};
export default Search;
