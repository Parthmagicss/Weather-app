import React, { useState } from "react";
import { useSelector } from "react-redux";
import Favorites from "../components/Favorites";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);


  const weatherData = useSelector((state) => state.weather.data);


  const addToFavorites = (city, country) => {

    const isAlreadyAdded = favorites.some(
      (favorite) => favorite.city === city && favorite.country === country
    );

    if (!isAlreadyAdded) {
      const newFavorite = { city, country };
      setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
    }
  };


  const removeFromFavorites = (city, country) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter(
        (item) =>
          item.city !== city || item.country !== country
      )
    );
  };

  return (
    <div>
      <h2>Favorites</h2>
      {weatherData ? (
        <Favorites
          favorites={favorites}
          weatherData={weatherData}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default FavoritesPage;
