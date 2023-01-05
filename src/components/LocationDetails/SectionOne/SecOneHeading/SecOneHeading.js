import React from "react";
import classes from "./SecOneHeading.module.css";
import SecOneTitle from "./SecOneTitle";
import SecOneHostInfo from "./SecOneHostInfo";
import SecOneHostAddress from "./SecOneHostAddress";
import SecOneBtn from "./SecOneBtn";
import share from "../../../../images/upload.png";
import heart from "../../../../images/heart.png";
import star from "../../../../images/star.png";
const SecOneHeading = () => {
  return (
    <div className={classes.main}>
      <SecOneTitle className={classes.title}>
        Hidden Heaven -5 Bed villa with pool
      </SecOneTitle>
      <div className={classes.host}>
        <SecOneHostInfo
          source={star}
          rating="5.0"
          reviews="5"
          rank="Superhost"
        />
        <SecOneHostAddress
          city="Captown"
          town="WesternCape"
          country="SouthAfrica"
        />
      </div>
      <div className={classes.btns}>
        <SecOneBtn source={share}>Share</SecOneBtn>
        <SecOneBtn source={heart}>Save</SecOneBtn>
      </div>
    </div>
  );
};

export default SecOneHeading;
