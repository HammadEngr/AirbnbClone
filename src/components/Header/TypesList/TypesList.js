import React, { useState } from "react";
import classes from "./TypesList.module.css";
import logo from "../../../images/home.png";
import TypeItem from "./TypeItem";
import left from "../../../images/left-chevron.png";
import right from "../../../images/chevron.png";
import { locations } from "../../Data/LocationsData";
//////////////////////////////////////////////////////

const TypesList = (props) => {
  const [curSlide, setCurSlide] = useState(0);
  const slidesToMove = 12;
  const totalSlides = locations.length - slidesToMove;
  const remainder = locations.length % slidesToMove;
  const remSlide = totalSlides - remainder;
  const customClass = `${classes.main} ${props.className}`;
  const moveRightHandler = () => {
    if (curSlide < remSlide) setCurSlide((prev) => prev + slidesToMove);
    if (curSlide >= remSlide && curSlide < totalSlides)
      setCurSlide((prev) => prev + remainder);
  };

  const moveLeftHandler = () => {
    if (curSlide > remainder) {
      setCurSlide((prev) => prev - slidesToMove);
    }
    if (curSlide <= remainder && curSlide > 0)
      setCurSlide((prev) => prev - remainder);
  };

  return (
    <div className={customClass}>
      <button className={classes.left} onClick={moveLeftHandler}>
        <img src={left} />
      </button>
      <div className={classes.slider}>
        <div className={classes.list}>
          {locations.map((loc, i) => (
            <TypeItem
              source={logo}
              title={loc}
              key={"L" + i}
              style={{ transform: `translateX(${100 * (i - curSlide)}%)` }}
            ></TypeItem>
          ))}
        </div>
      </div>
      <button className={classes.right} onClick={moveRightHandler}>
        <img src={right} />
      </button>
      <div className={classes.filter}>
        <button>Filters</button>
      </div>
    </div>
  );
};
export default TypesList;
