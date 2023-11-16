import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./assets/views/Home";
import Pokemones from "./assets/views/Pokemones";
import NotFound from "./assets/views/NotFound";
import NavBar from "./assets/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokemones" element={<Pokemones />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
