import React from "react";
import { Carousel } from "react-bootstrap";

const MovieCarousel = () => {
  return (
    <Carousel controls={true} indicators={true} interval={3000} wrap={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/rudra1.jpg"
          alt="Rudra Garuda Purana"
          style={{ height: "700px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Rudra Garuda Purana</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/yjhd.jpg"
          alt="Yeh Jawani Hai Deewani"
          style={{ height: "650px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Yeh Jawaani Hai Deewani</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/max.jpg"
          alt="max"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Max</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/james1.jpg"
          alt="James"
          style={{ height: "580px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>James</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MovieCarousel;
