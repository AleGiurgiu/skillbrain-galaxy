import React from "react";
import "./Modal.css";

const Modal = (props) => {
  if (!props.isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <i onClick={props.onClose} className="close-icon fa fa-times-circle-o" aria-hidden="true"></i>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
