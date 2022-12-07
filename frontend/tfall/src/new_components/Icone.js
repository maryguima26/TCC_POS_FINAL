import React, { useState } from "react";
import logo from "../imgs/logo-sembg.png";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Icone() {
  return (
    <Navbar>
      <Container className="border-bottom">
        <Navbar.Brand>
          <a href="/">
            <img src={logo} width="50px" />
          </a>
          {"   "}
          TFAll
        </Navbar.Brand>

        <Nav>
          <NavLink eventKey="1" as={Link} to="/login">
            Área do Professor
          </NavLink>
          <NavLink eventKey="1" as={Link} to="/login2">
            Área do Aluno
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Icone;
