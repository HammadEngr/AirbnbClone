import React, { useState } from "react";
import classes from "./YourQuestions.module.css";
import Question from "./Question";
import { QuestionsData } from "../Data/QuestionsData";

const YourQuestions = () => {
  return (
    <section className={classes.main}>
      <h1 className={classes.title}>
        Your questions, <br></br> answered
      </h1>
      <div className={classes.questions}>
        {QuestionsData.map((data, i) => (
          <Question key={"q" + i} data={data} />
        ))}
      </div>
    </section>
  );
};

export default YourQuestions;
