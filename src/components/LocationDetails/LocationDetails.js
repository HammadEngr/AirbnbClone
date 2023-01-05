import React from "react";
import classes from "./LocationDetails.module.css";
import Header from "../Header/Header";
import HeaderExpand from "../HeaderExpand/HeaderExpand";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import { GuestsContextProvider } from "../Store/guests-context";
import { HeaderContextProvider } from "../Store/header-context";

const LocationDetails = () => {
  return (
    <React.Fragment>
      <HeaderContextProvider>
        <GuestsContextProvider>
          <Header />
          <HeaderExpand className={classes.header__expand} />
        </GuestsContextProvider>
      </HeaderContextProvider>
      <SectionOne />
      <SectionTwo />
    </React.Fragment>
  );
};

export default LocationDetails;
