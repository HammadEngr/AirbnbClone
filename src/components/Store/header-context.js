import React, { useState } from "react";
const HeaderContext = React.createContext({
  expand: false,
  onSignUp: false,
  signUpForm: false,
  checkIn: false,
  guests: false,
  guestsHandler: () => {},
  checkInHandler: () => {},
  headerExpandHandler: () => {},
  headerCollapseHandler: () => {},
  signUpHandler: () => {},
  signUpFormHandler: () => {},
  signUpFormCloseHandler: () => {},
});
export const HeaderContextProvider = (props) => {
  const [signUpForm, setSignUpForm] = useState(false);
  const [onSignUp, setOnSignUp] = useState(false);
  const [expand, setExpand] = useState(false);
  const [checkIn, setCheckIn] = useState(false);
  const [guests, setGuests] = useState(false);
  const guestsHandler = () => {
    setGuests(true);
    setCheckIn(false);
  };
  const checkInHandler = () => {
    setCheckIn(true);
    setGuests(false);
  };
  const headerExpandHandler = () => {
    setExpand(true);
    setCheckIn(true);
  };
  const headerCollapseHandler = () => {
    setExpand(false);
    setCheckIn(false);
    setGuests(false);
  };
  const signUpHandler = () => {
    setOnSignUp((prev) => !prev);
  };
  const signUpFormHandler = () => {
    setOnSignUp(false);
    setSignUpForm(true);
  };
  const signUpFormCloseHandler = () => {
    setSignUpForm(false);
  };
  return (
    <HeaderContext.Provider
      value={{
        expand: expand,
        checkIn: checkIn,
        guests: guests,
        guestsHandler: guestsHandler,
        checkInHandler: checkInHandler,
        headerExpandHandler: headerExpandHandler,
        headerCollapseHandler: headerCollapseHandler,
        onSignUp: onSignUp,
        signUpHandler: signUpHandler,
        signUpForm: signUpForm,
        signUpFormHandler: signUpFormHandler,
        signUpFormCloseHandler: signUpFormCloseHandler,
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
};
export default HeaderContext;
