import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Home = () => {
  const { setPokemons, pokemons } = useContext(PokemonContext);
  //llamada a la api
  async function getPokemons(signal) {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
      const response = await fetch(url, signal);
      const data = await response.json();
      const pokemonsData = data;
      setPokemons(pokemonsData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getPokemons(signal);
    //cleanup
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Bienvenido Maestro Pokemon</h1>
      {/* <img src={pokemons?.sprites.back_default} alt="" /> */}
      <p>{pokemons?.results[150].name}</p>
    </div>
  );
};

export default Home;
