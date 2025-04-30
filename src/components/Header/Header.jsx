import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function Header({ handleAddClick, weatherData, onToggleUnit }) {
  const { currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );
  
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div></div>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Logo" />
      </Link>
      <p className="header__date-and-location">{`${currentDate}, ${weatherData.city}`}</p>
      <ToggleSwitch onToggleUnit={onToggleUnit} />
      <button
        type="button"
        className="header__add-clothes-btn"
        onClick={handleAddClick}
      >
        + Add clothes
      </button>
      <Link to="/profile" className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </Link>
    </header>
  );
}

export default Header;
