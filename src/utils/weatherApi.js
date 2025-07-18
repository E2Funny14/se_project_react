import { checkResponse } from "./api";

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then(checkResponse)
    .then((data) => {
      const temperatureF = Math.round(data.main.temp);
      const temperatureC = Math.round(temperatureF - (32 * 5) / 9);
      const weatherType = defineWeatherType(temperatureF);
      return {
        city: data.name,
        temperature: {
          F: temperatureF,
          C: temperatureC,
        },
        type: weatherType,
      };
    });
};

const defineWeatherType = (temperature) => {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
};

export const defineWeatherData = (data) => {
  return {
    city: data.city,
    temp: {
      F: data.temperature.F,
      C: data.temperature.C,
    },
    type: defineWeatherType(data.temperature.F),
  };
};
