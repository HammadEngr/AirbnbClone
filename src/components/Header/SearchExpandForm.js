import React from "react";
import classes from "./SearchExpandForm.module.css";
import CardSmall from "../UI/CardSmall";
/////////////////////////////////////////////////////
const SearchExpandForm = (props) => {
  const clickHandler = () => {
    props.onClick();
  };
  const customClass = `${props.className} ${classes.main}`;
  return (
    <CardSmall className={customClass}>
      <div onClick={clickHandler}>
        <label className={classes.label}>Where</label>
        <input
          className={classes.input}
          type="text"
          placeholder="search the destination"
        />
      </div>
    </CardSmall>
  );
};
export default SearchExpandForm;
