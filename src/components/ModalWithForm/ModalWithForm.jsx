import { useEffect, useState } from "react";
import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, activeModal, onClose }) {
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    const handleEscape = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleOverlayClick = (evt) => {
    if (evt.target.classList.contains("modal")) {
      onClose();
    }
  };

  const handleRadioClick = (id) => {
    setSelectedRadio((prev) => (prev === id ? "" : id));
  };

  return (
    <div
      className={`modal ${activeModal === "add-garment" && "modal_opened"}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        ></button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
