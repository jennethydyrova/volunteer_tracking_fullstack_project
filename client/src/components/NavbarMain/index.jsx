import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarMain = () => {
  return (
    <Container>
      <Navbar bg="light" variant="light" collapseOnSelect>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/volunteersinfo">Volunteers information</NavLink>
            <NavLink to="/projectsinfo" style={{ marginLeft: "2rem" }}>
              Projects
            </NavLink>
            <NavLink to="/volunteertracking" style={{ marginLeft: "2rem" }}>
              Volunteer Activity Track
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarMain;
