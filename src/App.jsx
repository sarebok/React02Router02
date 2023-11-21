import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import NotFound from "./views/NotFound";
import NavBar from "./components/NavBar";
import Selector from "./views/Selector";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokeselector" element={<Selector />}></Route>
        <Route path="/pokemones/:pokemonEscogido" element={<Pokemones />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
