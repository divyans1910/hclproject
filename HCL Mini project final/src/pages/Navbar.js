import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Navbarcomp(){
    return(
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand to="/">Parking Management System</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Home">Home</Nav.Link>
              <Nav.Link as={Link} to="/Employee">Employee</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    );
}


export default Navbarcomp;