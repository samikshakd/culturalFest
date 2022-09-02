import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NavCompo.css"

const NavCompo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" expand="sm" variant="light">
        <Container>
          <Navbar.Brand href="/"> CulturOFest </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
              <NavDropdown title="Events" id="basic-nav-dropdown">
                <NavDropdown.Item href="/ganeshafest">
                  Ganesha Chaturthi
                </NavDropdown.Item>
                <NavDropdown.Item href="/navratri">Navratri</NavDropdown.Item>
                <NavDropdown.Item href="/diwali"> Diwali </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/breaklunch">
                  Breakfast/Lunch
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => navigate("/contact")}>
                Contact Us
              </Nav.Link>
              <Button className="button" onClick={() => navigate("/signin")}>
              Login
            </Button>
            <Button className="button" onClick={() => navigate("/register")}>
            SignUp
          </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavCompo;
