import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/images/JZLogoLight.png";

const Header = () => {
  // Detect whether user is scrolling
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Update the active links
  const [activeLink, setActiveLink] = useState("home");
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}>
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}>
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="#artworks"
              className={
                activeLink === "artworks" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("artworks")}>
              Artworks
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <Link to="#connect">
              <button className="vvd">
                <span>Let's Connect</span>
              </button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
