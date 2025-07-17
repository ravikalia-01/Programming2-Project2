import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { fetchMovies } from './api';

const HomePage = ({ userMovies }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [durationFilter, setDurationFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchMovies(category);
      setMovies(data.Search || []);
      setLoading(false);
    };

    fetchData();
  }, [category]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDurationFilter = (e) => {
    setDurationFilter(e.target.value);
  };

  const handleRatingFilter = (e) => {
    setRatingFilter(e.target.value);
  };

  const handleTypeFilter = (e) => {
    setTypeFilter(e.target.value);
  };

  const filteredMovies = movies
    .filter((movie) => (durationFilter ? filterByDuration(movie) : true))
    .filter((movie) => (ratingFilter ? parseFloat(movie.imdbRating) >= parseFloat(ratingFilter) : true))
    .filter((movie) => (typeFilter ? movie.Type.toLowerCase() === typeFilter.toLowerCase() : true));

  const filterByDuration = (movie) => {
    const duration = parseInt(movie.Runtime.split(' ')[0]);
    if (durationFilter === 'min') {
      return duration < 90;
    } else if (durationFilter === 'h') {
      return duration >= 90;
    }
    return true;
  };

  return (
    <div className="homepage">
      <h2>Home</h2>

      <div className="filters">
        <select onChange={handleCategoryChange} value={category}>
          <option value="all">All Categories</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
        </select>

        <select onChange={handleDurationFilter} value={durationFilter}>
          <option value="">Duration</option>
          <option value="min">Short</option>
          <option value="h">Long</option>
        </select>

        <input
          type="number"
          placeholder="Min Rating"
          value={ratingFilter}
          onChange={handleRatingFilter}
        />

        <select onChange={handleTypeFilter} value={typeFilter}>
          <option value="">Type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
      </div>

      {/* Loading State */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-list">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
          ) : (
            <p>No movies found with the selected filters.</p>
          )}
        </div>
      )}

      {/* Display User Added Movies */}
      <div className="user-added-movies">
        <h3>Your Added Movies</h3>
        <div className="user-card">
        {userMovies.length > 0 ? (
          userMovies.map((movie, index) => <MovieCard key={index} movie={movie} />)
        ) : (
          <p>You have not added any movies yet.</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
