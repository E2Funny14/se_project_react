import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";
import { addItem } from "../../utils/api";

const AddItemModal = ({ isOpen, onAddItemSubmit, onCloseModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleImageUrlChange = (e) => setImageUrl(e.target.value);
  const handleWeatherChange = (e) => setWeather(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemSubmit({ name, imageUrl, weather })
      .then(() => {
        setName("");
        setImageUrl("");
        setWeather("");
      })
      .catch(console.error);
  };

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <div className="modal__radio-btn-group">
          <input
            type="radio"
            id="hot"
            name="weatherType"
            value="hot"
            checked={weather === "hot"}
            onChange={handleWeatherChange}
          />
          <label htmlFor="hot" className="modal__button-label">
            Hot
          </label>
        </div>
        <div className="modal__radio-btn-group">
          <input
            type="radio"
            id="warm"
            name="weatherType"
            value="warm"
            checked={weather === "warm"}
            onChange={handleWeatherChange}
          />
          <label htmlFor="warm" className="modal__button-label">
            Warm
          </label>
        </div>
        <div className="modal__radio-btn-group">
          <input
            type="radio"
            id="cold"
            name="weatherType"
            value="cold"
            checked={weather === "cold"}
            onChange={handleWeatherChange}
          />
          <label htmlFor="cold" className="modal__button-label">
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
