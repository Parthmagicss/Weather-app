import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // For simplicity, we'll assume successful login if the username is non-empty
    if (username.trim() !== "") {
      setLoggedIn(true);
    }
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            {loggedIn ? (
              <button onClick={handleSignOut}>Sign Out</button>
            ) : (
              <form onSubmit={handleSignIn}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Sign In</button>
              </form>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
