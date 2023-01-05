import React from "react";
import classes from "./Aircover.module.css";
import check from "../../images/check.png";
import cross from "../../images/cross.png";
const Aircover = () => {
  return (
    <div className={classes.main}>
      <h1>
        <span>air</span>cover
      </h1>
      <h2>Airbnb it with top to bottom protection</h2>
      <table className={classes.table}>
        <tr>
          <td className={classes.title}></td>
          <td className={classes.heading}>Airbnb</td>
          <td className={classes.heading}>Competitors</td>
        </tr>
        <tr>
          <td className={classes.title}>Guest identity verification</td>
          <td className={classes.check}>
            <img src={check} />
          </td>
          <td className={classes.cross}>
            <img src={cross} />
          </td>
        </tr>
        <tr>
          <td className={classes.title}>
            Reservation screening <sup>1</sup>
          </td>
          <td className={classes.check}>
            <img src={check} />
          </td>
          <td className={classes.cross}>
            <img src={cross} />
          </td>
        </tr>
        <tr>
          <td className={classes.title}>$3M damage protection </td>
          <td className={classes.check}>
            <img src={check} />
          </td>
          <td className={classes.cross}>
            <img src={cross} />
          </td>
        </tr>
        <tr>
          <td className={classes.title}>Art & valuables</td>
          <td className={classes.check}>
            <img src={check} />
          </td>
          <td className={classes.cross}>
            <img src={cross} />
          </td>
        </tr>
        <tr>
          <td className={classes.title}>Auto & boat</td>
          <td className={classes.check}>
            <img src={check} />
          </td>
          <td className={classes.cross}>
            <img src={cross} />
          </td>
        </tr>
        <tr>
          <td className={classes.title}>Pet damage</td>
          <td className={classes.check}>
            <img src={check} />
          </td>
          <td className={classes.cross}>
            <img src={cross} />
          </td>
        </tr>
        <tr>
          <td className={classes.title}>Income loss</td>
          <td className={classes.check}>
            <img src={check} />
          </td>
          <td className={classes.cross}>
            <img src={cross} />
          </td>
        </tr>
        <tr>
          <td className={classes.title}>Deep cleaning</td>
          <td className={classes.check}>
            <img src={check} />
          </td>
          <td className={classes.cross}>
            <img src={cross} />
          </td>
        </tr>
        <tr>
          <td className={classes.title}>$1M liability insurance</td>
          <td className={classes.check}>
            <img src={check} />
          </td>
          <td className={classes.cross}>
            <img src={cross} />
          </td>
        </tr>
        <tr>
          <td className={classes.title}>24-hour safety line</td>
          <td className={classes.check}>
            <img src={check} />
          </td>
          <td className={classes.cross}>
            <img src={cross} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Aircover;
