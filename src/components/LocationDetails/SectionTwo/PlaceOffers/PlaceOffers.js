import React from "react";
import classes from "./PlaceOffers.module.css";
import PlaceOffer from "./PlaceOffer";
import bay from "../../../../images/bay.png";
import beach from "../../../../images/beach.png";
import kitchen from "../../../../images/kitchen.png";

const PlaceOffers = (props) => {
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={customClass}>
      <h3>What this place offers</h3>
      <PlaceOffer title="Bay view" source={bay} />
      <PlaceOffer title="Beach view" source={beach} />
      <PlaceOffer title="Kitchen" source={kitchen} />
    </div>
  );
};

export default PlaceOffers;
