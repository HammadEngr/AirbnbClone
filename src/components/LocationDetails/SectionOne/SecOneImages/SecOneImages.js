import React from "react";
import classes from "./SecOneImages.module.css";
import v1 from "../../../../images/villas/v1.jpg";
import v2 from "../../../../images/villas/v2.jpg";
import v3 from "../../../../images/villas/v3.jpg";
import v4 from "../../../../images/villas/v4.jpg";
import v5 from "../../../../images/villas/v5.jpg";

const SecOneImages = () => {
  return (
    <div className={classes.main}>
      <div className={classes.one}>
        <img src={v1} />
      </div>
      <div className={classes.two}>
        <img src={v2} />
      </div>
      <div className={classes.three}>
        <img src={v3} />
      </div>
      <div className={classes.four}>
        <img src={v4} />
      </div>
      <div className={classes.five}>
        <img src={v5} />
      </div>
    </div>
  );
};

export default SecOneImages;
