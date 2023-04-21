import React from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">NutriBuddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/Home">
            <Nav.Link>Meals</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
            <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contactus">
            <Nav.Link>Conatct Us</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#calender">Calender</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default AppNavbar;