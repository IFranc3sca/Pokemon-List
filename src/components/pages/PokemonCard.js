import React, { useState, useEffect } from "react";
import "./pokemonCard.css";
import { Link, useParams } from "react-router-dom";
import { useLazyGetPokemonByIdQuery } from "../../api/pokemonApi";

const PokemonCard = () => {
  const { pokemonName } = useParams();
  const [getPokemon, pokemonQuery] = useLazyGetPokemonByIdQuery();
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    getPokemon(pokemonName);
  }, []);

  useEffect(() => {
    if (pokemonQuery.isSuccess && !pokemonQuery.isFetching) {
      const pokemonData = pokemonQuery.data || [];
      setPokemonDetails(pokemonData);
    }
    return () => {};
  }, [pokemonQuery]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="pokemon">
          <div className="container-type">
            <h1 className="type">Type: </h1>
            <h1 className="pokemon-type">
              {pokemonDetails.types[0].type.name[0].toUpperCase() +
                pokemonDetails.types[0].type.name.slice(1)}
            </h1>
          </div>
          <div className="img-container">
            <img
              src={pokemonDetails.sprites.other.dream_world.front_default}
            ></img>
          </div>
          <div className="abilities">
            <div className="abilities-title">
              <h2>Abilities:</h2>
            </div>
            <div className="abilities-list">
              <ul className="abilities-ul">
                <li>
                  <span className="first">
                    {pokemonDetails.abilities[0].ability.name[0].toUpperCase() +
                      pokemonDetails.abilities[0].ability.name.slice(1)}
                  </span>
                </li>
                <li>
                  <span className="second">
                    {pokemonDetails.abilities[1].ability.name[0].toUpperCase() +
                      pokemonDetails.abilities[1].ability.name.slice(1)}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Link to="/" className="back-link">
          <h3 className="back-link">Back</h3>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default PokemonCard;
