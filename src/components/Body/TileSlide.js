import React, { useState } from "react";
import classes from "./TileSlide.module.css";
// import { ImgSrc } from "../Data/ImgData";
import left from "../../images/left-chevron.png";
import right from "../../images/chevron.png";
////////////////////////////////////////////////
const TileSlide = (props) => {
  const [btnsRender, setBtnsRender] = useState(false);
  const [curSlide, setCusSlide] = useState(0);
  const maxSlide = props.imgSrc.length;
  const nextSlide = () => {
    if (curSlide < maxSlide - 1) setCusSlide((prev) => prev + 1);
    if (curSlide === maxSlide - 1) setCusSlide(0);
  };
  const prevSlide = () => {
    if (curSlide > 0) setCusSlide((prev) => prev - 1);
    if (curSlide === 0) setCusSlide(maxSlide - 1);
  };
  const onMouseHandler = () => {
    setBtnsRender(true);
  };
  const onMouseOutHandler = () => {
    setBtnsRender(false);
  };
  const customClass = `${classes.slider} ${props.className}`;
  return (
    <div
      className={customClass}
      onMouseOver={onMouseHandler}
      onMouseOut={onMouseOutHandler}
    >
      {props.imgSrc.map((img, i) => (
        <div
          key={`iimg${i}`}
          className={classes.slide}
          style={{ transform: `translateX(${100 * (i - curSlide)}%)` }}
        >
          <img src={img} />
        </div>
      ))}
      {btnsRender && (
        <button className={classes.left} onClick={prevSlide}>
          <img src={left} />
        </button>
      )}
      {btnsRender && (
        <button className={classes.right} onClick={nextSlide}>
          <img src={right} />
        </button>
      )}
    </div>
  );
};
export default TileSlide;
