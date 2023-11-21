import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Pokemones = () => {
  const { setSelectedPokemon, selectedPokemon } = useContext(PokemonContext);
  const { pokemonEscogido } = useParams();
  //llamada a la api

  async function getPokemonEscogido(signal) {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonEscogido;
      const response = await fetch(url, signal);
      const data = await response.json();
      const pokemonsData = data;
      setSelectedPokemon(pokemonsData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getPokemonEscogido(signal);
    //cleanup
    return () => {
      controller.abort();
    };
  }, []);

  if (!selectedPokemon) return;
  const { name, sprites } = selectedPokemon;
  return (
    <div className="selected-pokemon">
      <h3>pokemon seleccionado: </h3>
      <h1>{name}</h1>
      <img src={sprites?.front_default} alt="" />
    </div>
  );
};

export default Pokemones;
