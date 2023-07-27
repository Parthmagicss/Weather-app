import React from "react";

const Favorites = ({ favorites }) => {
  return (
    <div className="favorite-cities">
      <h2>Favorite Cities</h2>
      {favorites.length === 0 ? (
        <p>No favorite cities added yet.</p>
      ) : (
        favorites.map((favorite, index) => (
          <div key={index} className="favorite-city">
            <h3>{favorite.city}</h3>
            <p>{favorite.country}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
