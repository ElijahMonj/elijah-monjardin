import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, NavLink} from 'react-router-dom'

function NavigationBar() {

    return(
        <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand as={Link} to={"/"}>Elijah Monjardin</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Elijah Monjardin
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    <Nav.Link as={Link}to={"/portfolio"}>Portfolio</Nav.Link>
                    <Nav.Link as={Link} to={"/resume"}>Resume</Nav.Link>
                    <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    )

}

export default NavigationBar