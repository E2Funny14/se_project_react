import "./WeatherCard.css";
import sunny from '../../assets/sunny.svg';
import cloudySun from '../../assets/cloudy-sun.svg';

function WeatherCard() {
    return <section className='weather-card'>
        <p className="weather-card__temp">75 &deg;F</p>
        <img className='weather-card__image' src={cloudySun} alt="Sunny" />
    </section>;
}

export default WeatherCard;