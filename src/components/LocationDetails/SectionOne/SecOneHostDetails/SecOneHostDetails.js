import React from "react";
import classes from "./SecOneHostDetails.module.css";
import { data } from "../../../Data/JennyData";
import HostTitle from "./HostTitle";
import VillaDetails from "./VillaDetails";
import HostImage from "./HostImage";
import HostingExperience from "./HostingExperience";
const SecOneHostDetails = (props) => {
  const customClass = `${classes.main} ${props.className}`;
  return (
    <div className={classes.wrapper}>
      <div className={customClass}>
        <HostTitle className={classes.title}>{data.title}</HostTitle>
        <VillaDetails
          className={classes.villa}
          guests={data.guests}
          bedrooms={data.bedrooms}
          beds={data.beds}
          baths={data.baths}
        />
        <HostImage className={classes.image} image={data.image} />
      </div>
      <HostingExperience
        source={data.bedPic}
        title={data.title}
        text={data.text}
      />
      <HostingExperience
        source={data.checkInKey}
        title={data.checkInTitle}
        text={data.checkInText}
      />
      <HostingExperience source={data.invoice} title={data.cancellationTitle} />
    </div>
  );
};

export default SecOneHostDetails;
