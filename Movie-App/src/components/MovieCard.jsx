import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p><strong>Duration:</strong> {movie.Runtime}</p>
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Platform:</strong> {movie.Platform || 'Not Available'}</p>
    </div>
  );
};

export default MovieCard;
