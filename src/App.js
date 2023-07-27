import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import FavoritesPage from "./pages/FavoritesPage";
import "../src/index.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
      <Router>
      
        <div className="App">
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
                    <button onClick={() => setLoggedIn(false)}>Sign Out</button>
                  ) : (
                    <Link to="/signin">Sign In</Link>
                  )}
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/favorites" component={FavoritesPage} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
