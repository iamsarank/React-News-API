import React from 'react';
import {Container, Navbar, Button, Form}  from 'react-bootstrap';


function Header(){
    return (
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#home"><h4>React NEWS API</h4></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header;