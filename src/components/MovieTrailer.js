import React from "react";

const MovieTrailer = () => {
  return (
    <div className="mt-4">
      <h3>Movie Trailer</h3>
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/YNZ5o6R0jGw"  // ✅ Fixed Embed URL
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
