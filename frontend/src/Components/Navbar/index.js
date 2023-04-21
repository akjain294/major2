import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLogout } from "../../Hooks/useLogout";
import { useUserContext } from "../../Hooks/useUserContext";

function AppNavbar() {
  const { user } = useUserContext();
  const { logout } = useLogout();

  const handleLogoutClick = () => {
    logout();
  };

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
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {!user && (
              <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
            )}
            <LinkContainer to="/contactus">
              <Nav.Link>Conatct Us</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#calender">Calender</Nav.Link>
            {user && <p>{user.user.name}</p>}
            {user && <button onClick={handleLogoutClick}>Logout</button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
