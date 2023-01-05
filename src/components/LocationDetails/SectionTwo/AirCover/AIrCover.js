import React, { useState } from "react";
import classes from "./AirCover.module.css";
import AIrLogo from "./AIrLogo";
import AirCoverExpand from "../AirCoverExpand/AirCoverExpand";
const AIrCover = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const customClass = `${classes.main} ${props.className}`;
  const clickHandler = () => {
    setIsExpand(true);
  };
  return (
    <div className={customClass}>
      <AIrLogo />
      <p>
        Every booking includes free protection from Host cancellations, listing
        inaccuracies, and other issues like trouble checking in.
      </p>
      <button onClick={clickHandler}>Learn More</button>
      {isExpand === true ? <AirCoverExpand isExpand={setIsExpand} /> : ""}
    </div>
  );
};

export default AIrCover;
