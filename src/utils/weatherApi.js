export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .then((data) => {
      const temperature = data.main.temp;
      const weatherType = defineWeatherType(temperature);
      return {
        city: data.name,
        temperature,
        weatherType,
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
        F: data.temperature,
      },
      type: defineWeatherType(data.temperature), 
    };
  };
