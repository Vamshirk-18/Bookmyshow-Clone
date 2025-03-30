import React from "react";
import { Container, Table } from "react-bootstrap";

const movies = [
  {
    id: 1,
    name: "Inception",
    genre: "Sci-Fi/Thriller",
    release: "2010-07-16",
    rating: "4.8",
    price: "₹350",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    name: "Interstellar",
    genre: "Sci-Fi/Adventure",
    release: "2014-11-07",
    rating: "4.9",
    price: "₹400",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: 3,
    name: "The Dark Knight",
    genre: "Action/Crime",
    release: "2008-07-18",
    rating: "4.9",
    price: "₹380",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    id: 4,
    name: "Avatar: The Way of Water",
    genre: "Sci-Fi/Fantasy",
    release: "2022-12-16",
    rating: "4.7",
    price: "₹420",
    trailer: "https://www.youtube.com/embed/d9MyW72ELq0",
  },
];

const MoviesPage = () => {
  return (
    <Container className="mt-4">
      <h2>Now Showing</h2>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Movie</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Trailer</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie.id}>
              <td>{index + 1}</td>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.release}</td>
              <td>{movie.rating} ⭐</td>
              <td>{movie.price}</td>
              <td>
                <iframe
                  width="200"
                  height="100"
                  src={movie.trailer}
                  title={movie.name}
                  allowFullScreen
                ></iframe>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MoviesPage;
