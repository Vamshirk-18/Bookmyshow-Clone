import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
        <Navbar.Brand as={Link} to="/">
          {/* Add BookMyShow logo here */}
          <img 
            src="/logo7.png"  // Replace this with the actual logo file path
            alt="BookMyShow"
            height="40" // Adjust size as needed
            className="me-2"
          />
          BookMyShow-2.0
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <FormControl type="search" placeholder="Search movies/events" className="me-2" />
            <Button variant="outline-light">Search</Button>
          </Form>

          <Button variant="danger" className="ms-3" onClick={() => setShowSignup(true)}>
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Navbar>

      {/* Signup Modal */}
      <Modal show={showSignup} onHide={() => setShowSignup(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" className="w-100">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavigationBar;