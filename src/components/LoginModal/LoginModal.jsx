import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onLogin, onRegisterClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  const handleRegisterClick = () => {
    onClose();
    onRegisterClick();
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div className="modal__submit-section">
        <button type="submit" className="modal__submit-btn">
          Log In
        </button>
        <span className="modal__or-text">
          or{" "}
          <button
            type="button"
            className="modal__link-btn"
            onClick={handleRegisterClick}
          >
            Sign Up
          </button>
        </span>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
