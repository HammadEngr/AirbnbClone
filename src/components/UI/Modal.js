import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
///////////////////////////////////////////
const BackDrop = (props) => {
  return <div className={classes.backdrop}>BackDrop</div>;
};

const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
