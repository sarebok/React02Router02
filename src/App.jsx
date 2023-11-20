import "./App.css";
import { Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import NotFound from "./views/NotFound";
import NavBar from "./components/NavBar";
import Selector from "./views/Selector";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokeselector" element={<Selector />}></Route>
        <Route path="/pokemones/:pokemonEscogido" element={<Pokemones />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
