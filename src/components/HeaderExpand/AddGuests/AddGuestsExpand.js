import React, { useContext } from "react";
import classes from "./AddGuestsExpand.module.css";
import AddGuestExpand from "./AddGuestExpand";
import close from "../../../images/close.png";
import GuestsContext from "../../Store/guests-context";
//////////////////////////////////////////////////////
const AddGuestsExpand = (props) => {
  const ctx = useContext(GuestsContext);
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <img src={close} onClick={props.onGuestClose} />
        <h5>Add Guests</h5>
      </div>

      <AddGuestExpand
        age={"Adult"}
        description={"13 or above"}
        incHandler={ctx.adultsHandler}
        decHandler={ctx.decAdultsHandler}
        guestType={ctx.Guests.adults}
      />
      <AddGuestExpand
        age={"Children"}
        description={"Age 2 to 12"}
        incHandler={ctx.childrenHandler}
        decHandler={ctx.decChildrenHandler}
        guestType={ctx.Guests.children}
      />
      <AddGuestExpand
        age={"Infants"}
        description={"Under 2"}
        incHandler={ctx.infantsHandler}
        decHandler={ctx.decInfantsHandler}
        guestType={ctx.Guests.infants}
      />
      <AddGuestExpand
        age={"Pets"}
        description={"Bringing a pet"}
        incHandler={ctx.petsHandler}
        decHandler={ctx.decPetsHandler}
        guestType={ctx.Guests.pets}
      />
    </div>
  );
};

export default AddGuestsExpand;
