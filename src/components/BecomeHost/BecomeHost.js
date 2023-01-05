import React, { useContext } from "react";
import classes from "./BecomeHost.module.css";
import NavBar from "./NavBar";
import AirbnbIt from "./AirbnbIt";
import Section2 from "./Section2";
import Aircover from "./Aircover";
import YourQuestions from "./YourQuestions";
import Footer from "../Footer/Footer";
import FooterContent from "../Footer/FooterContent";
import Currencies from "../ChooseCurrency/Currencies";
import MyMap from "./MyMap";
import FooterContext from "../Store/footer-context";
import HeaderContext from "../Store/header-context";
import { HeaderContextProvider } from "../Store/header-context";
const BecomeHost = () => {
  const ftx = useContext(FooterContext);
  const htx = useContext(HeaderContext);
  return (
    <div className={classes.main}>
      <HeaderContextProvider>
        <NavBar />
      </HeaderContextProvider>
      <section className={classes.sec__1}>
        <AirbnbIt />
        <MyMap></MyMap>
      </section>
      <Section2 />
      <Aircover />
      <YourQuestions />
      <FooterContent />
      <Footer
        onSupportClick={ftx.supportOpenHandler}
        onCurrency={ftx.currencyHandler}
        className={classes.footer}
      />
      {ftx.onCurrency && <Currencies />}
    </div>
  );
};

export default BecomeHost;
