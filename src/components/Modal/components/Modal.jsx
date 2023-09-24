import React, { useState } from "react";
import Modaler from "./Modaler";

const Modal = ({ show = true, ...props }) => {
  const [showModal, setShowModal] = useState(show);

  if (showModal) {
    return <Modaler {...props} show={showModal} setShow={setShowModal} />;
  }

  return <div />;
};

export default Modal;
