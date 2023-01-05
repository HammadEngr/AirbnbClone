import React, { useContext } from "react";
import classes from "./HeaderExpand.module.css";
import Calender from "../Calender/Calender";
import CalenderBtns from "../Calender/CalenderBtns";
import AddGuestsExpand from "./AddGuests/AddGuestsExpand";
import close from "../../images/close.png";
import GuestsContext from "../Store/guests-context";
import HeaderContext from "../Store/header-context";
//////////////////////////////////////////////////////////
const HeaderExpand = (props) => {
  const ctx = useContext(GuestsContext);
  const htx = useContext(HeaderContext);
  const clickHandler = (e) => {
    ctx.daysToleranceHandler(e.target.dataset.days);
  };
  const checkInHandler = (date) => {
    ctx.checkInHandler(date);
  };
  const checkOutHandler = (date) => {
    ctx.checkOutHandler(date);
  };
  const customClass = `${classes.expand} ${
    htx.expand ? classes.activate : ""
  } ${props.className}`;
  return (
    <div className={classes.main}>
      {htx.checkIn && (
        <div className={customClass}>
          <div className={classes.wrapper}>
            <div className={classes.close}>
              <img src={close} onClick={htx.headerCollapseHandler} />
            </div>
            <CalenderBtns></CalenderBtns>
            <div className={classes.cals}>
              <Calender
                className={classes.cal}
                onClick={checkInHandler}
              ></Calender>
              <Calender
                className={classes.cal}
                onClick={checkOutHandler}
              ></Calender>
            </div>

            <div className={classes.bottom__btns}>
              <button
                className={classes.btn}
                data-days="0"
                onClick={clickHandler}
              >
                Exact Dates
              </button>
              <button
                className={classes.btn}
                data-days="1"
                onClick={clickHandler}
              >
                <span>+-</span>1 Day
              </button>
              <button
                className={classes.btn}
                data-days="2"
                onClick={clickHandler}
              >
                +- 2 Days
              </button>
              <button
                className={classes.btn}
                data-days="3"
                onClick={clickHandler}
              >
                +- 3 Days
              </button>
              <button
                className={classes.btn}
                data-days="7"
                onClick={clickHandler}
              >
                +- 7 Days
              </button>
            </div>
          </div>
        </div>
      )}
      {htx.guests && (
        <AddGuestsExpand onGuestClose={htx.headerCollapseHandler} />
      )}
    </div>
  );
};
export default HeaderExpand;
