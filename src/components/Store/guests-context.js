import React, { useState } from "react";
const GuestsContext = React.createContext({
  TotalGuests: 0,
  Guests: {},
  Dates: {},
  checkInHandler: () => {},
  checkOutHandler: () => {},
  daysToleranceHandler: () => {},
  adultsHandler: () => {},
  decAdultsHandler: () => {},
  childrenHandler: () => {},
  decChildrenHandler: () => {},
  infantsHandler: () => {},
  decInfantsHandler: () => {},
  petsHandler: () => {},
  decPetsHandler: () => {},
});

export const GuestsContextProvider = (props) => {
  const [dates, setDates] = useState({
    checkIn: "",
    checkOut: "",
    daysTolerance: "",
  });
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const checkInHandler = (date) => {
    setDates((prev) => {
      return {
        ...prev,
        checkIn: date,
      };
    });
  };
  const checkOutHandler = (date) => {
    setDates((prev) => {
      return {
        ...prev,
        checkOut: date,
      };
    });
  };
  const daysToleranceHandler = (days) => {
    setDates((prev) => {
      return {
        ...prev,
        daysTolerance: days,
      };
    });
  };
  const adultsHandler = () => {
    setGuests((prev) => {
      return {
        ...prev,
        adults: prev.adults + 1,
      };
    });
  };
  const decAdultsHandler = () => {
    setGuests((prev) => {
      return {
        ...prev,
        adults: prev.adults - 1,
      };
    });
  };
  const childrenHandler = () => {
    setGuests((prev) => {
      return {
        ...prev,
        children: prev.children + 1,
      };
    });
  };
  const decChildrenHandler = () => {
    setGuests((prev) => {
      return {
        ...prev,
        children: prev.children - 1,
      };
    });
  };
  const infantsHandler = () => {
    setGuests((prev) => {
      return {
        ...prev,
        infants: prev.infants + 1,
      };
    });
  };
  const decInfantsHandler = () => {
    setGuests((prev) => {
      return {
        ...prev,
        infants: prev.infants - 1,
      };
    });
  };
  const petsHandler = () => {
    setGuests((prev) => {
      return {
        ...prev,
        pets: prev.pets + 1,
      };
    });
  };
  const decPetsHandler = () => {
    setGuests((prev) => {
      return {
        ...prev,
        pets: prev.pets - 1,
      };
    });
  };

  return (
    <GuestsContext.Provider
      value={{
        TotalGuests:
          guests.adults + guests.children + guests.infants + guests.pets,
        // TotalGuests: 1,
        Guests: guests,
        Dates: dates,
        adultsHandler: adultsHandler,
        decAdultsHandler: decAdultsHandler,
        childrenHandler: childrenHandler,
        decChildrenHandler: decChildrenHandler,
        infantsHandler: infantsHandler,
        decInfantsHandler: decInfantsHandler,
        petsHandler: petsHandler,
        decPetsHandler: decPetsHandler,
        checkInHandler: checkInHandler,
        checkOutHandler: checkOutHandler,
        daysToleranceHandler: daysToleranceHandler,
      }}
    >
      {props.children}
    </GuestsContext.Provider>
  );
};

export default GuestsContext;
