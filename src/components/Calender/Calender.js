import React, { useState, useContext } from "react";
import classes from "./Calender.module.css";
import left from "../../images/left-chevron.png";
import right from "../../images/chevron.png";
import GuestsContext from "../Store/guests-context";
/////////////////////////////////////////////////
let date = new Date(),
  curMonth = date.getMonth(),
  curYear = date.getFullYear();
let lastDateofMonth = new Date(curYear, curMonth + 1, 0).getDate();
let firstDayofMonth = new Date(curYear, curMonth, 1).getDay();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Calender = (props) => {
  const [month, setMonth] = useState(months[curMonth]);
  const [lastDate, setLastDate] = useState(lastDateofMonth);
  const [fisrtDay, setFirstDay] = useState(firstDayofMonth);
  const ctx = useContext(GuestsContext);

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  let dates = Array.from({ length: lastDate }, (_, i) => i + 1);

  const prevMonth = () => {
    curMonth--;
    if (curMonth < 1) {
      date = new Date(curYear, curMonth);
      curYear = date.getFullYear();
      curMonth = date.getMonth();
    }
    setMonth(months[curMonth]);
    setLastDate(new Date(curYear, curMonth + 1, 0).getDate());
    setFirstDay(new Date(curYear, curMonth, 1).getDay());
  };

  const nextMonth = () => {
    curMonth++;
    if (curMonth > 11) {
      date = new Date(curYear, curMonth);
      curYear = date.getFullYear();
      curMonth = date.getMonth();
    }
    setMonth(months[curMonth]);
    setLastDate(new Date(curYear, curMonth + 1, 0).getDate());
    setFirstDay(new Date(curYear, curMonth, 1).getDay());
  };

  let list = [];
  for (let i = 1; i <= fisrtDay; i++) {
    list.push(<li key={i + "lastD"} className={classes.inactive}></li>);
  }
  const clickHandler = (e) => {
    const checkDate = `${e.target.value} ${month} ${curYear}`;
    props.onClick(checkDate);
  };

  const customClass = `${classes.main} ${props.className}}`;

  return (
    <div className={customClass}>
      <div className={classes.title}>
        <div className={classes.icon} id="left" onClick={prevMonth}>
          <img src={left} />
        </div>
        <h4 className={classes.month}>{`${month} ${curYear}`}</h4>
        <div className={classes.icon} id="right" onClick={nextMonth}>
          <img src={right} />
        </div>
      </div>
      <ul className={classes.days}>
        {days.map((day, i) => (
          <li key={i + day[0]} className={classes.day}>
            {day}
          </li>
        ))}
      </ul>
      <ul className={classes.dates}>
        {list}
        {dates.map((date) => (
          <li
            key={"D" + date}
            className={classes.date}
            onClick={clickHandler}
            value={date}
          >
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Calender;
