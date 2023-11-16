import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pokemones">Pokemones</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
