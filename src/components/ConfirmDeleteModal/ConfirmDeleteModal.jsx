import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({ isOpen, onClose, onConfirm }) {
  const handleOverlayClick = (evt) => {
    if (evt.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div
      className={`modal delete__modal ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content modal__content_delete">
        <h2 className="modal__title modal__title_delete">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>
        <button type="button" className="modal__close" onClick={onClose} />
        <div className="modal__submit-section modal__submit-section_delete">
          <button
            type="button"
            className="modal__submit-btn modal__submit-btn_delete  modal__submit-btn_active modal__submit-btn_active_delete"
            onClick={onConfirm}
          >
            Yes, delete item
          </button>
          <button
            type="button"
            className="modal__link-btn modal__link-btn_delete"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
