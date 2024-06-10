import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Header = () => (
  <HeaderWrapper>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Your Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </HeaderWrapper>
);

export default Header;
