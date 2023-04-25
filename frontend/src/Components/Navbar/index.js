import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLogout } from "../../Hooks/useLogout";
import { useUserContext } from "../../Hooks/useUserContext";
import "./style.css";

function AppNavbar({ size, show, setShow }) {
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
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Nav
            className="me-auto"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
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
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/mealPlanning">
              <Nav.Link>Plans</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/calender">
              <Nav.Link>Calender</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart" onClick={() => setShow(true)}>
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="cart" onClick={() => setShow(false)}>
              <span>
                <i className="fas fa-cart-plus"></i>
              </span>
              <span>{size}</span>
            </div>
          </Nav>
          <Nav
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {user && <p>{user.user.name}</p>}
            {user && <button onClick={handleLogoutClick}>Logout</button>}
          </Nav>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
