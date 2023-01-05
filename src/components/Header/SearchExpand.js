import React, { useState, useContext } from "react";
import classes from "./SearchExpand.module.css";
import SearchExpandForm from "./SearchExpandForm";
import CardSmall from "../UI/CardSmall";
import searchIcon from "../../images/search-interface-symbol.png";
import GuestsContext from "../Store/guests-context";
import HeaderContext from "../Store/header-context";
////////////////////////////////////////////////

const SearchExpand = (props) => {
  const [isBtnClicked, setIsBtnClicked] = useState({
    checkIn: false,
    checkOut: false,
    who: false,
  });
  const [showForm, setShowForm] = useState(true);
  const ctx = useContext(GuestsContext);
  const htx = useContext(HeaderContext);
  const guests = ctx.TotalGuests;
  const guestsMarkup = `${guests > 1 ? guests + " guests" : guests + " guest"}`;
  const checkInMarkup =
    ctx.Dates.checkIn.trim().length > 0 ? ctx.Dates.checkIn : "Add dates";

  const checkOutMarkup =
    ctx.Dates.checkOut.trim().length > 0 ? ctx.Dates.checkOut : "Add dates";

  const clickHandler = (e) => {
    const el = e.target.closest("div");
    const elName = el.getAttribute("name");
    if (elName === "checkIn") {
      setShowForm(false);
      htx.checkInHandler();
      setIsBtnClicked((prev) => {
        return {
          ...prev,

          checkIn: !isBtnClicked.checkIn,
          checkOut: false,
          who: false,
        };
      });
    } else if (elName === "checkOut") {
      setShowForm(false);

      htx.checkInHandler();

      setIsBtnClicked((prev) => {
        return {
          ...prev,

          checkOut: !isBtnClicked.checkOut,
          checkIn: false,
          who: false,
        };
      });
    } else {
      setShowForm(false);
      htx.guestsHandler();
      setIsBtnClicked((prev) => {
        return {
          ...prev,

          checkIn: false,
          checkOut: false,
          who: !isBtnClicked.who,
        };
      });
    }
  };
  const showFormHandler = () => {
    setShowForm(true);
    setIsBtnClicked((prev) => {
      return {
        ...prev,
        checkIn: false,
        checkOut: false,
        who: false,
      };
    });
  };

  const customClass = `${props.className} ${classes.main} ${
    htx.expand ? classes.active : ""
  }`;
  return (
    <CardSmall className={customClass}>
      <SearchExpandForm
        className={`${classes.form} ${showForm && classes.form__active}`}
        onClick={showFormHandler}
      />
      <div
        className={`${classes.check} ${
          isBtnClicked.checkIn && classes.check__active
        }`}
        name="checkIn"
        onClick={clickHandler}
      >
        Check In <br></br> <span>{checkInMarkup}</span>
      </div>
      <div
        className={`${classes.check} ${
          isBtnClicked.checkOut && classes.check__active
        }`}
        name="checkOut"
        onClick={clickHandler}
      >
        Check Out <br></br> <span>{checkOutMarkup}</span>
      </div>
      <div
        className={`${classes.check} ${
          isBtnClicked.who && classes.check__active
        }`}
        name="who"
        onClick={clickHandler}
      >
        Who <br></br>{" "}
        <span>{`${guests > 0 ? guestsMarkup : "Add guests"}`}</span>
      </div>
      <button className={classes.btn} onClick={htx.headerCollapseHandler}>
        <img src={searchIcon} /> Search
      </button>
    </CardSmall>
  );
};
export default SearchExpand;
