import classes from "./GuestCount.module.css";
import plus from "../../../images/add.png";
import minus from "../../../images/minus.png";
//////////////////////////////////////////////
const GuestCount = (props) => {
  const clickHandler = (e) => {
    const { name } = e.target;
    console.log(e.target);
    if (name === "inc") {
      if (props.guestType === 16) return;
      props.incHandler();
      console.log("hello");
    }
    if (name === "dec") {
      if (props.guestType === 0) return;
      props.decHandler();
    }
  };

  return (
    <div className={classes.main}>
      <button className={classes.dec} name="dec" onClick={clickHandler}>
        <img src={minus} name="dec" />
      </button>
      <p>{props.guestType}</p>
      <button className={classes.inc} name="inc" onClick={clickHandler}>
        <img src={plus} name="inc" />
      </button>
    </div>
  );
};

export default GuestCount;
