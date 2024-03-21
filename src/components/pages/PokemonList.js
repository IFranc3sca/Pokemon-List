import React, { useEffect, useState } from "react";
import PokemonItem from "./PokemonItem";
import { useLazyGetPokemonListQuery } from "../../api/pokemonApi";
import "./pokemonList.css";

const PokemonList = () => {
  const [getPokemonList, pokemonQuery] = useLazyGetPokemonListQuery();
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    getPokemonList();
  }, []);

  useEffect(() => {
    if (pokemonQuery.isSuccess && !pokemonQuery.isFetching) {
      const pokemonData = pokemonQuery.data.results || [];
      setPokemonNames(pokemonData);
    }
    return () => {};
  }, [pokemonQuery]);

  return (
    <React.Fragment>
      <div className="list-container">
        <div>
          <h2>Pokémon List</h2>
        </div>
        <ul className="list">
          {pokemonNames.map((pokemon, index) => (
            <li key={index} className="item">
              <PokemonItem pokemon={pokemon} />
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default PokemonList;
