import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import MovieCarousel from "./components/MovieCarousel";
import MovieList from "./components/MovieList";
import EventPage from "./components/EventPage";
import DarkModeToggle from "./components/DarkModeToggle";
import MovieTrailer from "./components/MovieTrailer";
import MoviesPage from "./components/MoviesPage";
import Sports from "./components/Sports"; // ✅ Import Sports Page
import "./App.css";

const Home = () => (
  <div className="container">
    <DarkModeToggle />
    <MovieCarousel />
    <MovieList />
    <MovieTrailer />
  </div>
);

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/sports" element={<Sports />} /> {/* ✅ Sports Page Route */}
      </Routes>
    </Router>
  );
};

export default App;


