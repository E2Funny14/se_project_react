import "./WeatherCard.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import sunny from "../../assets/sunny.svg";
import cloudySun from "../../assets/cloudy-sun.svg";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]} &deg;{currentTemperatureUnit}
      </p>
      <img className="weather-card__image" src={cloudySun} alt="Sunny" />
    </section>
  );
}

export default WeatherCard;
