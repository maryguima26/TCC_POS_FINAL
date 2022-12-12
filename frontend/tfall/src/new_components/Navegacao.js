import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navegacao() {
  return (
    <Navbar
      className=" mt-0"
      // collapseOnSelected
      expand="sm"
      // bg="dark"
      // variant="dark"
    >
      {/* <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-target="#navbarScroll"
      /> */}
      <Navbar className="m-auto">
        <Nav>
          <NavLink eventKey="1" as={Link} to="/about">
            Sobre
          </NavLink>
          <NavLink eventKey="2" as={Link} to="/triathlon">
            Triatlo
          </NavLink>
          <NavLink eventKey="3" as={Link} to="/duathlon">
            Duatlo
          </NavLink>
          <NavLink eventKey="4" as={Link} to="/gym">
            Musculação
          </NavLink>
        </Nav>
      </Navbar>
    </Navbar>
  );
}

export default Navegacao;
