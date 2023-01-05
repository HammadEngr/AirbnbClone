import React from "react";
import classes from "./Section2.module.css";
import sec2img from "../../images/sec2img.jpg";

const Section2 = () => {
  return (
    <section className={classes.section}>
      <div className={classes.sec__img}>
        <h1>Airbnb it easily with Airbnb setup</h1>
        <img src={sec2img} />
      </div>
      <div className={classes.sec__details}>
        <div className={classes.sec__detail}>
          <h3>One-to-one guidance from a Superhost</h3>
          <p>
            We’ll match you with a Superhost in your area, who’ll guide you from
            your first question to your first guest—by phone, video call, or
            chat.
          </p>
        </div>
        <div className={classes.sec__detail}>
          <h3>An experienced guest for your first booking</h3>
          <p>
            For your first booking, you can choose to welcome an experienced
            guest who has at least three stays and a good track record on
            Airbnb.
          </p>
        </div>{" "}
        <div className={classes.sec__detail}>
          <h3>Specialized support from Airbnb</h3>
          <p>
            New Hosts get one-tap access to specially trained Community Support
            agents who can help with everything from account issues to billing
            support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
