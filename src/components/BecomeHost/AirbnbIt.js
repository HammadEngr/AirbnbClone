import React, { useState } from "react";
import classes from "./AirbnbIt.module.css";
import search from "../../images/search-interface-symbol.png";
import NightsCountExpand from "./NightsCountExpand";
import YourPlace from "./YourPlace";
const AirbnbIt = () => {
  const [nights, setNights] = useState(false);
  const [nightsCount, setNightsCount] = useState(1);
  const [slideDisplay, setSlideDisplay] = useState(false);
  const [place, setPlace] = useState(false);
  const nightsHandler = () => {
    setNights(true);
  };
  const nightsClsoeHandler = () => {
    setNights(false);
  };

  const sliderChangeHandler = (e) => {
    setNightsCount(e.target.value);
  };
  const mouseDownHandler = () => {
    setSlideDisplay(true);
  };
  const mouseUpHandler = () => {
    setSlideDisplay(false);
  };
  const placeChangeHandler = () => {
    setPlace(true);
  };
  const closePlaceHandler = () => {
    setPlace(false);
  };
  return (
    <div className={classes.airbnb__it}>
      <h1 className={classes.title}>Airbnb it</h1>
      <h1 className={classes.earn}>You could earn</h1>
      <h1 className={classes.amount}>${nightsCount * 500}</h1>
      {!slideDisplay && (
        <p>
          <span className={classes.guest__count} onClick={nightsHandler}>
            {nightsCount} {nightsCount > 1 ? "nights " : "night "}
          </span>
          at an estimated
          <span className={classes.amount__perNight}> $50 </span>a night
        </p>
      )}
      <div className={classes.slider}>
        {slideDisplay && (
          <div
            className={classes.slider__nights}
            style={{ transform: `translateX(${10.5 * nightsCount}px)` }}
          >
            {nightsCount} {nightsCount > 1 ? "nights" : "night"}
          </div>
        )}
        <div className={classes.input}>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={nightsCount}
            onChange={sliderChangeHandler}
            onMouseDown={mouseDownHandler}
            onMouseUp={mouseUpHandler}
            className={classes.range__input}
          ></input>
        </div>
      </div>
      <p className={classes.learn__how}>learn how we estimate your earnings</p>
      <button className={classes.airbnb__btn} onClick={placeChangeHandler}>
        <span className={classes.search__logo}>
          <img src={search} />
        </span>
        Islamabad
        <span className={classes.entire__place}>Entire place 4 guests</span>
      </button>
      {place && <YourPlace closePlace={closePlaceHandler} />}
      <NightsCountExpand
        nights={nights}
        onCloseNights={nightsClsoeHandler}
        nightsCount={nightsCount}
        sliderChangeHandler={sliderChangeHandler}
      />
    </div>
  );
};

export default AirbnbIt;
