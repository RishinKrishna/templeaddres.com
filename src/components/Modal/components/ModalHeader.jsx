import React from "react";
import Styles from "../modal.module.scss";
import classNames from "classnames";
import CloseIcon from "@/components/icons/CloseIcon";
const ModalHeader = ({
  heading,
  subHeading,
  className,
  containerClassName,
  closeModal,
}) => {
  return (
    <div
      className={classNames(
        Styles["modal-header-container"],
        containerClassName
      )}
    >
      <div>
        <h1 className={classNames(Styles["heading"])}>{heading} </h1>
        <span className={classNames(Styles["sub-heading"])}>{subHeading}</span>
      </div>
      <button type="button" onClick={closeModal}>
       X
      </button>
    </div>
  );
};

export default ModalHeader;