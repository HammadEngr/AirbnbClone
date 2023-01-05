import React, { useState } from "react";
import classes from "./Question.module.css";
import up from "../../images/up-chevron.png";

const Question = (props) => {
  const [expand, setExpand] = useState(false);
  const clickHandler = () => {
    setExpand((prev) => !prev);
  };
  return (
    <div className={classes.question}>
      <div
        className={classes.question_container}
        data-tab={props.data.datatab}
        onClick={clickHandler}
      >
        <h4>{props.data.question}</h4>
        <img src={up} className={`${classes.up} ${expand && classes.rotate}`} />
      </div>

      {expand && <p className={classes.answer}>{props.data.answer}</p>}
    </div>
  );
};

export default Question;
