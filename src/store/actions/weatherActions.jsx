import axios from "axios";

const ekgherkerjkfnrjnfke0999 = "YOUR_WEATHER_API_KEY";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Action Types
export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

// Action Creators
export const fetchWeatherRequest = () => {
  return {
    type: FETCH_WEATHER_REQUEST,
  };
};

export const fetchWeatherSuccess = (data) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: data,
  };
};

export const fetchWeatherFailure = (error) => {
  return {
    type: FETCH_WEATHER_FAILURE,
    payload: error,
  };
};

// Thunk function to fetch weather data from the API
export const fetchWeatherData = (city, country) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest());

    const queryParams = `?q=${city},${country}&appid=${ekgherkerjkfnrjnfke0999}&units=metric`;

    axios
      .get(API_BASE_URL + queryParams)
      .then((response) => {
        dispatch(fetchWeatherSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchWeatherFailure(error.message));
      });
  };
};
