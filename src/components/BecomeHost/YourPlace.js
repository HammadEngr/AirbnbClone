import React, { useState } from "react";
import classes from "./YourPlace.module.css";
import close from "../../images/close.png";
import plus from "../../images/add.png";
import minus from "../../images/minus.png";
import Modal from "../UI/Modal";

const YourPlace = (props) => {
  const [guests, setGuests] = useState(1);
  const [place, setPlace] = useState({
    one: true,
    two: false,
  });
  const placeSelectHandler = (e) => {
    const { name } = e.target;
    setPlace((prev) => {
      return {
        ...prev,
        one: false,
        two: false,
        [name]: !prev.name,
      };
    });
  };
  const guestIncreaseHandler = () => {
    if (guests === 16) return;
    setGuests((prev) => prev + 1);
  };
  const guestDecreaseHandler = () => {
    if (guests === 1) return;
    setGuests((prev) => prev - 1);
  };
  return (
    <Modal>
      <div className={classes.main}>
        <header className={classes.header}>
          <img
            src={close}
            className={classes.close}
            onClick={props.closePlace}
          />
          <h5 className={classes.question}>Tell us about your place</h5>
        </header>
        <section className={classes.section}>
          <div className={classes.address}>
            <label>Address or area</label>
            <input type="text" placeholder="enter your place"></input>
          </div>
          <div className={classes.type}>
            <h5>Type of place</h5>
            <div className={classes.btns}>
              <button
                onClick={placeSelectHandler}
                className={`${place.one && classes.active}`}
                name="one"
              >
                Entire place
              </button>
              <button
                onClick={placeSelectHandler}
                className={`${place.two && classes.active}`}
                name="two"
              >
                Private room
              </button>
            </div>
          </div>
          <div className={classes.guests}>
            <h5>Guests</h5>
            <div className={classes.guests__choose}>
              <button
                className={classes.increase}
                onClick={guestDecreaseHandler}
              >
                <img src={minus} />
              </button>
              <p className={classes.number__guest}>{guests}</p>
              <button
                className={classes.decrease}
                onClick={guestIncreaseHandler}
              >
                <img src={plus} />
              </button>
            </div>
          </div>
        </section>
        <footer className={classes.footer}>
          <button>Update your estimate</button>
        </footer>
      </div>
    </Modal>
  );
};

export default YourPlace;
