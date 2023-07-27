import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "../store/actions/weatherActions";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const weatherData = useSelector((state) => state.weather.weatherData);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherData(city, country));
  };

  return (
    <div>
      <h2>Weather App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default Home;
