import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";


function CacheNav() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="site-title" href="">
              CacheMarket
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#market">Market</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#sign up">Sign Up</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default CacheNav;
