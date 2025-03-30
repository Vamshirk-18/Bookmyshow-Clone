import React, { useState } from "react";
import { Table, Button, Alert } from "react-bootstrap";

const MovieList = () => {
  const [bookingMessage, setBookingMessage] = useState("");

  const movies = [
    { name: "Rudra Garuda Purana", genre: "Action", release: "2025-01-26", rating: "4.9", price: "₹250" },
    { name: "Yeh Jawaani Hai Deewani", genre: "Comedy", release: "2025-04-01", rating: "4.7", price: "₹300" },
    { name: "Max", genre: "Action Thriller", release: "2025-05-15", rating: "4.6", price: "₹280" },
    { name: "James", genre: "Drama", release: "2025-06-20", rating: "4.3", price: "₹260" },
  ];

  const handleBooking = (movieName) => {
    setBookingMessage(`Tickets for "${movieName}" booked successfully!`);
    setTimeout(() => setBookingMessage(""), 3000); // Hide message after 3 sec
  };

  return (
    <div className="mt-4">
      <h2>Now Showing</h2>

      {bookingMessage && <Alert variant="success">{bookingMessage}</Alert>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Ratings</th>
            <th>Ticket Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.release}</td>
              <td>{movie.rating}⭐</td>
              <td>{movie.price}</td>
              <td>
                <Button variant="primary" onClick={() => handleBooking(movie.name)}>
                  Book Now
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MovieList;
