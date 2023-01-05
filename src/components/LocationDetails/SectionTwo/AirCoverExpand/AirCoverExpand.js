import React from "react";
import classes from "./AirCoverExpand.module.css";
import Modal from "../../../UI/Modal";
import AIrLogo from "../AirCover/AIrLogo";
import close from "../../../../images/close.png";
const AirCoverExpand = (props) => {
  const clickHandler = () => {
    props.isExpand(false);
  };
  const customClass = `${classes.main} ${props.className}`;
  return (
    <Modal>
      <div className={customClass}>
        <div className={classes.close}>
          <img src={close} onClick={clickHandler} />
        </div>
        <div className={classes.title}>
          <AIrLogo />
          <p>
            AirCover is comprehensive protection included for free with every
            booking.
          </p>
        </div>
        <section>
          <div className={classes.protection}>
            <h3>Booking Protection Guarantee</h3>
            <p>
              In the unlikely event a Host needs to cancel your booking within
              30 days of check-in, we’ll find you a similar or better home, or
              we’ll refund you.
            </p>
          </div>
          <div className={classes.gaurentee}>
            <h3>Get-What-You-Booked Guarantee</h3>
            <p>
              If at any time during your stay you find your listing isn't as
              advertised—for example, the refrigerator stops working and your
              Host can’t easily fix it, or it has fewer bedrooms than
              listed—you'll have three days to report it and we’ll find you a
              similar or better home, or we’ll refund you.
            </p>
          </div>
          <div className={classes.chekIn}>
            <h3>Check-In Guarantee</h3>
            <p>
              If you can’t check into your home and the Host cannot resolve the
              issue, we’ll find you a similar or better home for the length of
              your original stay, or we’ll refund you.
            </p>
          </div>
          <div className={classes.safety}>
            <h3>24-hour Safety Line</h3>
            <p>
              If you ever feel unsafe, you’ll get priority access to
              specially-trained safety agents, day or night.
            </p>
          </div>
          <div className={classes.help}>
            <p>
              Find complete details on how AirCover protects your booking in our
              Help Center
            </p>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default AirCoverExpand;
