import { useState } from "react";

import "../../App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });
  const [activeModal, setActiveModal] = useState("");

  const handleAddClick = () => {
    setActiveModal("add-garment");
  }

  const handleClose = () => {
    setActiveModal("");
  }

  return (
    <div className="app">
      <div className="app__wrapper">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} />
      </div>
      <ModalWithForm
        title="New Garment"
        buttonText="Add Garment"
        activeModal={activeModal}
        handleCloseClick={handleClose}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-btns">
          <legend className="modal__legend">Select the weather type:</legend>
          <div className="modal__radio-btn-group">
            <input
              type="radio"
              id="hot"
              name="hot"
              className="modal__radio-btn"
            />
            <label htmlFor="hot" className="modal__button-label">
              Hot
            </label>
          </div>
          <div className="modal__radio-btn-group">
            <input
              type="radio"
              id="warm"
              name="warm"
              className="modal__radio-btn"
            />
            <label htmlFor="cold" className="modal__button-label">
              Warm
            </label>
          </div>
          <div className="modal__radio-btn-group">
            <input
              type="radio"
              id="cold"
              name="cold"
              className="modal__radio-btn"
            />
            <label htmlFor="cold" className="modal__button-label">
              Cold
            </label>
          </div>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;
