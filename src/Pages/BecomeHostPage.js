import BecomeHost from "../components/BecomeHost/BecomeHost";
import React from "react";
import { TabTitle } from "../utilities/TabTitle";
const BecomeHostPage = () => {
  TabTitle("Airbnb Become Host");
  return (
    <React.Fragment>
      <BecomeHost />
    </React.Fragment>
  );
};

export default BecomeHostPage;
