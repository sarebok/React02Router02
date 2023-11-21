import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-primary">
      <NavLink className="nav-link text-white p-3" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link text-white p-3" to="/pokeselector">
        Pokemones
      </NavLink>
    </Navbar>
  );
};

export default NavBar;
