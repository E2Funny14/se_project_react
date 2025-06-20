import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({ handleAddClick, weatherData, onToggleUnit, isLoggedIn, onLoginClick, onRegisterClick, onLogout }) {
  const { currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );
  const currentUser = useContext(CurrentUserContext);
  
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const getAvatarDisplay = () => {
    if (currentUser?.avatar) {
      return (
        <img 
          src={currentUser.avatar} 
          alt={currentUser.name || "User"} 
          className="header__avatar"
          onError={(e) => {
          e.target.onerror = null;
          e.target.style.display = "none";
        }} 
        />
      );
    } else if (currentUser?.name) {
      return (
        <div className="header__avatar-placeholder">
          {currentUser.name.charAt(0).toUpperCase()}
        </div>
      );
    }
    return (
      <div className="header__avatar-placeholder">
        U
      </div>
    );
  };

  return (
     <header className="header">
      <div></div>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Logo" />
      </Link>
      <p className="header__date-and-location">{`${currentDate}, ${weatherData.city}`}</p>
      <ToggleSwitch onToggleUnit={onToggleUnit} />
      {isLoggedIn ? (
        <>
          <button
            type="button"
            className="header__add-clothes-btn"
            onClick={handleAddClick}
          >
            + Add clothes
          </button>
          <div className="header__user-section">
            <Link to="/profile" className="header__user-container">
              <p className="header__username">{currentUser?.name || "User"}</p>
              {getAvatarDisplay()}
            </Link>
          </div>
        </>
      ) : (
        <div className="header__auth-container">
          <button
            type="button"
            className="header__register-btn"
            onClick={onRegisterClick}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="header__login-btn"
            onClick={onLoginClick}
          >
            Log In
          </button>
        </div>
      )}
    </header>
    // <header className="header">
    //   <div></div>
    //   <Link to="/">
    //     <img className="header__logo" src={logo} alt="Logo" />
    //   </Link>
    //   <p className="header__date-and-location">{`${currentDate}, ${weatherData.city}`}</p>
    //   <ToggleSwitch onToggleUnit={onToggleUnit} />
    //   <button
    //     type="button"
    //     className="header__add-clothes-btn"
    //     onClick={handleAddClick}
    //   >
    //     + Add clothes
    //   </button>
    //   <Link to="/profile" className="header__user-container">
    //     <p className="header__username">Terrence Tegegne</p>
    //     <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
    //   </Link>
    // </header>
  );
}

export default Header;
