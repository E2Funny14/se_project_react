import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherData,
  handleCardClick,
  clothingItems,
  onCardLike,
}) {
  
  const { currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  const temperature =
    currentTemperatureUnit === "C" ? weatherData.temp.C : weatherData.temp.F;

  return (
    <main>
      <WeatherCard
        weatherData={weatherData}
      />
      <section className="cards">
        <p className="cards__text">
          Today is {temperature} &deg;{currentTemperatureUnit} / You may want to
          wear:
        </p>

        <ul className="cards__list">
          {clothingItems &&
            clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
