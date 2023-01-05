import React, { useContext } from "react";
import classes from "./Currencies.module.css";
import close from "../../images/close.png";
import Currency from "./Currency";
import { curData } from "../Data/CurrenciesData";
import Modal from "../UI/Modal";
import FooterContext from "../Store/footer-context";

////////////////////////////////////////////
const Currencies = (props) => {
  const ftx = useContext(FooterContext);

  const chooseCurrencyHandler = (cur) => {
    ftx.chooseCurrencyHandler(cur);
    ftx.onCloseCurrencyHandler();
  };
  const customClass = `${classes.main} ${props.className}`;
  return (
    <Modal>
      <div className={customClass}>
        <div className={classes.close} onClick={ftx.onCloseCurrencyHandler}>
          <img src={close} />
        </div>
        <div className={classes.container}>
          <div className={classes.choose}>
            <h2>Choose a Currency</h2>
          </div>
          <div className={classes.currencies}>
            {curData.map((cur, i) => (
              <Currency
                key={"cur" + i}
                name={cur.countryName}
                abbr={cur.currencyCode}
                onClick={chooseCurrencyHandler}
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Currencies;
