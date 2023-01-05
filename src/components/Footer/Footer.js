import React, { useContext } from "react";
import classes from "./Footer.module.css";
import up from "../../images/up-chevron.png";
import FooterContext from "../Store/footer-context";
////////////////////////////////////////////////////
const Footer = (props) => {
  const ftx = useContext(FooterContext);
  const customClass = `${classes.footer} ${props.className}`;
  return (
    <div className={customClass}>
      <ul className={classes.list__items}>
        <li>Airbnb</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Sitemap</li>
        <li>Destinations</li>
      </ul>
      <ul className={classes.list__items}>
        <li>English</li>
        <li onClick={ftx.currencyHandler}>{ftx.currency}</li>
        <li className={classes.list__up} onClick={ftx.supportOpenHandler}>
          Support & resources <img src={up} className={classes.up} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
