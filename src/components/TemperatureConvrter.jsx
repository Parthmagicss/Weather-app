import React, { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertToCelsius = (fahrenheitValue) => {
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
    return Math.round(celsiusValue * 100) / 100;
  };

  const convertToFahrenheit = (celsiusValue) => {
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    return Math.round(fahrenheitValue * 100) / 100;
  };

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    setFahrenheit(convertToFahrenheit(celsiusValue));
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    setCelsius(convertToCelsius(fahrenheitValue));
  };

  return (
    <div className="temperature-converter">
      <h2>Temperature Converter</h2>
      <div>
        <label htmlFor="celsius">Celsius:</label>
        <input
          type="number"
          id="celsius"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
      <div>
        <label htmlFor="fahrenheit">Fahrenheit:</label>
        <input
          type="number"
          id="fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;
