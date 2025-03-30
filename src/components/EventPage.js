import React, { useState } from "react";
import { Container, Button, Table, Modal } from "react-bootstrap";

const events = [
  { id: 1, name: "Sunburn Music Festival", date: "2025-04-15", location: "Goa, India" },
  { id: 2, name: "Comic Con India", date: "2025-05-10", location: "Bangalore, India" },
  { id: 3, name: "Tech Expo 2025", date: "2025-06-20", location: "Mumbai, India" },
  { id: 4, name: "Food Carnival", date: "2025-07-05", location: "Delhi, India" },
];

const EventPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="mt-4">
      <h2>Upcoming Events</h2>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Event Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.id}>
              <td>{index + 1}</td>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>
                <Button variant="primary" onClick={handleShow}>Book Ticket Now</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Ticket Booked Popup */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>🎟️ Ticket Booked Successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>OK</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default EventPage;
