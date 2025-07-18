import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onRegister, onLoginClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const isFormValid =
    email.trim() !== "" && password.trim() !== "" && name.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, name, avatar });
  };

  const handleLoginClick = () => {
    onClose();
    onLoginClick();
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="register-email">
        Email*
        <input
          type="email"
          className="modal__input"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="modal__label" htmlFor="register-password">
        Password*
        <input
          type="password"
          className="modal__input"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label className="modal__label" htmlFor="register-name">
        Name*
        <input
          type="text"
          className="modal__input"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="modal__label" htmlFor="register-avatar">
        Avatar URL
        <input
          type="url"
          className="modal__input"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </label>
      <div className="modal__submit-section">
        <button type="submit" className="modal__submit-btn">
          Sign Up
        </button>
        <span className="modal__or-text">
          or{" "}
          <button
            type="button"
            className="modal__link-btn"
            onClick={handleLoginClick}
          >
            Log In
          </button>
        </span>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
