import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const PokemonContext = createContext();

const ContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState();
  const state = { pokemons, setPokemons };
  return <PokemonContext.Provider value={state}>{children}</PokemonContext.Provider>;
};
export default ContextProvider;
