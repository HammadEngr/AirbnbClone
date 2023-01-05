import React, { useContext } from "react";
import classes from "./FooterExpand.module.css";
import Modal from "../UI/Modal";
import FooterContent from "./FooterContent";
import close from "../../images/close.png";
import FooterContext from "../Store/footer-context";

const FooterExpand = (props) => {
  const ftx = useContext(FooterContext);
  const customClass = `${classes.footer__expand} ${props.className}`;
  return (
    <Modal>
      <div className={customClass}>
        <button className={classes.closeBtn} onClick={ftx.supportCloseHandler}>
          <img src={close} />
        </button>
        <FooterContent />
      </div>
    </Modal>
  );
};

export default FooterExpand;
