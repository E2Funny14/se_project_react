import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, ondelete }) {
  const currentUser = useContext(CurrentUserContext);

  const handleOverlayClick = (evt) => {
    if (evt.target.classList.contains("modal")) {
      onClose();
    }
  };

  const handleDeleteClick = () => {
    ondelete(card);
  };

  const isOwn = card && currentUser && card.owner === currentUser._id;
  const itemDeleteButtonClassName = `modal__delete-btn${isOwn ? "" : " modal__delete-btn_hidden"}`;

  return (
    <div
      className={`modal ${activeModal === "preview" && "modal_opened"}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <p className="modal__caption">{card.name}</p>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            type="button"
            className={itemDeleteButtonClassName}
            onClick={handleDeleteClick}
            disabled={!isOwn}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
