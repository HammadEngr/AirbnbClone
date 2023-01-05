import React from "react";
import classes from "./SectionOne.module.css";
import SecOneHeading from "./SecOneHeading/SecOneHeading";
import SecOneImages from "./SecOneImages/SecOneImages";
import SecOneHostDetails from "../SectionOne/SecOneHostDetails/SecOneHostDetails";

const SectionOne = () => {
  return (
    <div className={classes.main}>
      <SecOneHeading />
      <SecOneImages />
      <SecOneHostDetails />
    </div>
  );
};

export default SectionOne;
