import classes from "./Details.module.css";
import React, { useState } from "react";
import DetailsExpand from "../DetailsExpand/DetailsExpand";
import { data } from "../../../Data/JennyData";
console.log(data);

const Details = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const clickHandler = () => {
    setIsExpand(true);
  };
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={customClass}>
      <p>
        Relax with the whole family at this peaceful 5 Bedroom Villa overlooking
        Hout Bay Beach
      </p>
      <p>
        <span>{`${data.bedrooms} BEDROOMS`}</span>
        <span>{`-${data.baths} BATHROOMS`}</span>
      </p>
      <button onClick={clickHandler}>Show more</button>
      {isExpand === true ? <DetailsExpand isExpand={setIsExpand} /> : ""}
    </div>
  );
};

export default Details;
