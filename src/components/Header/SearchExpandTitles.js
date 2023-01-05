import React, { useState } from "react";
import classes from "./SearchExpandTitles.module.css";
import SearchExpandTitleBtn from "./SearchExpandTitleBtn";
//////////////////////////////////////////////////////
const SearchExpandTitles = (props) => {
  const [isSatys, setIsStays] = useState(true);
  const [isExperience, setIsExperience] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

  const staysClickHandler = () => {
    setIsStays(true);
    setIsExperience(false);
    setIsOnline(false);
  };
  const experienceClickHandler = () => {
    setIsExperience(true);
    setIsStays(false);
    setIsOnline(false);
  };
  const onlineClickHandler = () => {
    setIsOnline(true);
    setIsExperience(false);
    setIsStays(false);
  };
  return (
    <div className={classes.main}>
      <SearchExpandTitleBtn onClick={staysClickHandler} valid={isSatys}>
        Stays
      </SearchExpandTitleBtn>
      <SearchExpandTitleBtn
        onClick={experienceClickHandler}
        valid={isExperience}
      >
        Experiences
      </SearchExpandTitleBtn>
      <SearchExpandTitleBtn onClick={onlineClickHandler} valid={isOnline}>
        Online Experiences
      </SearchExpandTitleBtn>
    </div>
  );
};
export default SearchExpandTitles;
