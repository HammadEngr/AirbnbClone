import React, { useContext } from "react";
import classes from "./MainPage.module.css";
import Header from "../components/Header/Header";
import HeaderExpand from "../components/HeaderExpand/HeaderExpand";
import Tiles from "../components/Body/Tiles";
import Footer from "../components/Footer/Footer";
import FooterExpand from "../components/Footer/FooterExpand";
import Currencies from "../components/ChooseCurrency/Currencies";
import { GuestsContextProvider } from "../components/Store/guests-context";
import { HeaderContextProvider } from "../components/Store/header-context";
import FooterContext from "../components/Store/footer-context";
import TypesList from "../components/Header/TypesList/TypesList";
import { TabTitle } from "../utilities/TabTitle";
const MainPage = () => {
  TabTitle("Airbnb home");
  const ftx = useContext(FooterContext);

  return (
    <React.Fragment>
      <div className={classes.main}>
        <TypesList />
        <HeaderContextProvider>
          <GuestsContextProvider>
            <Header className={classes.header} />
            <HeaderExpand className={classes.header__expand}></HeaderExpand>
          </GuestsContextProvider>
        </HeaderContextProvider>
        <Tiles />
        {ftx.onCurrency && <Currencies />}
        {ftx.onSupport && <FooterExpand />}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MainPage;
