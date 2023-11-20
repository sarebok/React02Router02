import React from "react";
import Selector from "./Selector";
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
      console.log("url", url);
      const response = await fetch(url, signal);
      const data = await response.json();
      const pokemonsData = data;
      console.log("data en pokemones", pokemonsData);
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
  return (
    <div>
      <h1>pokemon seleccionado:</h1>
      <h2>{pokemonEscogido}</h2>
    </div>
  );
};

export default Pokemones;
