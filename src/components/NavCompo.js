import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NavCompo.css"

const NavCompo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <div className="container-fluid mx-5">
          <Navbar.Brand href="/"><i class="fa fa-ravelry" aria-hidden="true"/> CulturOFest </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
              <NavDropdown className="item-hover" title="Events" id="basic-nav-dropdown">
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
              <Nav.Link className="item-hover" onClick={() => navigate("/contact")}>
                Contact Us
              </Nav.Link>
              <Nav.Link className="item-hover"  onClick={() => navigate("/signin")}>
              Login
            </Nav.Link>
            <Nav.Link className="item-hover"  onClick={() => navigate("/register")}>
            SignUp
          </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
      </Navbar>
    </div>
  );
}

export default NavCompo