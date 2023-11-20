import React from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Selector = () => {
  const { pokemons, selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);
  const { pokemonEscogido } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedPokemon(e.target.value);
    console.log("selector selected", selectedPokemon);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/pokemones/" + selectedPokemon);
  };

  return (
    <div>
      <h1>Selecciona un pokemon</h1>
      <form onSubmit={handleSubmit}>
        <select value={selectedPokemon} onChange={handleChange}>
          <option value="Selecciona un pokemon">Selecciona un pokemon</option>
          {pokemons?.map(({ name }) => {
            return (
              <option key={Math.random()} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        <button type="submit">enviar</button>
      </form>
    </div>
  );
};

export default Selector;
