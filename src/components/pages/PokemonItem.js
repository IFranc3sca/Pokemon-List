import React, { useState, useEffect } from "react";
import "./pokemonItem.css";
import { Link } from "react-router-dom";

const PokemonItem = ({ pokemon }) => {
  return (
    <div className="pokemon-item">
      <div className="pokemon-name">
        <h2 className="pokemon-name-title">
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </h2>
      </div>
      <div className="pokemon-link">
        <Link to={`/card/${pokemon.name}`} className="card-link">
          <h3 className="pokemon-link-title">Open</h3>
        </Link>
      </div>
    </div>
  );
};

export default PokemonItem;
