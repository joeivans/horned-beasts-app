import React from 'react';
import {Container, Navbar} from 'react-bootstrap';


export function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="light">
        <Container>
          <Navbar.Brand>
            <span> A Sampling of Horned Beasts! </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}
