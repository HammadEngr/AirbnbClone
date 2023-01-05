import classes from "./AirLogo.module.css";
import React from "react";

const AIrLogo = (props) => {
  const customClass = `${props.className}`;
  return (
    <h2 className={customClass}>
      <span>air</span>cover
    </h2>
  );
};

export default AIrLogo;
