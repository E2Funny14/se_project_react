import { useEffect, useState } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
}) {

  const handleOverlayClick = (evt) => {
    if (evt.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen && "modal_opened"}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close" onClick={onClose} />
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          {/* <div className="modal__submit-section">
            <button type="submit" className="modal__submit-btn">
              {buttonText}
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
