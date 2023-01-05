import React, { useState } from "react";
const FooterContext = React.createContext({
  supportOpenHandler: () => {},
  supportCloseHandler: () => {},
  currencyHandler: () => {},
  chooseCurrencyHandler: () => {},
  onCloseCurrencyHandler: () => {},
  onCurrency: false,
  currency: "",
  onSupport: false,
});
export const FooterContextProvider = (props) => {
  const [onCurrency, setOnCurrency] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [onSupport, setOnSupport] = useState(false);
  const supportOpenHandler = () => {
    setOnSupport(true);
  };
  const supportCloseHandler = () => {
    setOnSupport(false);
  };
  const currencyHandler = () => {
    setOnCurrency(true);
  };
  const chooseCurrencyHandler = (cur) => {
    setCurrency(cur);
  };
  const onCloseCurrencyHandler = () => {
    setOnCurrency(false);
  };
  return (
    <FooterContext.Provider
      value={{
        currency: currency,
        onCurrency: onCurrency,
        onSupport: onSupport,
        chooseCurrencyHandler: chooseCurrencyHandler,
        supportOpenHandler: supportOpenHandler,
        supportCloseHandler: supportCloseHandler,
        currencyHandler: currencyHandler,
        onCloseCurrencyHandler: onCloseCurrencyHandler,
      }}
    >
      {props.children}
    </FooterContext.Provider>
  );
};
export default FooterContext;
