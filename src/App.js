import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonCard from "./components/pages/PokemonCard";
import PokemonList from "./components/pages/PokemonList";
import { store } from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/card/:pokemonName" element={<PokemonCard />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
