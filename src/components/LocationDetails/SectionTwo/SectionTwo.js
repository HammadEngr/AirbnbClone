import React from "react";
import classes from "./SectionTwo.module.css";
import AIrCover from "./AirCover/AIrCover";
import AirCoverExpand from "./AirCoverExpand/AirCoverExpand";
import Details from "./Details/Details";
import DetailsExpand from "./DetailsExpand/DetailsExpand";
import PlaceOffers from "./PlaceOffers/PlaceOffers";
const SectionTwo = (props) => {
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={customClass}>
      <AIrCover />
      {/* <AirCoverExpand /> */}
      <Details />
      {/* <DetailsExpand /> */}
      <PlaceOffers />
    </div>
  );
};

export default SectionTwo;
