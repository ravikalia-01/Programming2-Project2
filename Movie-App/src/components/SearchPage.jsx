import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { fetchMovies } from './api';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);

    const data = await fetchMovies(query);

    if (data.Error) {
      setError(data.Error);
      setMovies([]);
    } else {
      setMovies(data.Search);
    }

    setLoading(false);
  };

  return (
    <div className="search-page">
      <h2>Search for Movies</h2>
      <form onSubmit={handleSearch}>
        <input  type="text"  value={query}  onChange={(e) => setQuery(e.target.value)}  placeholder="Search movies..."  required/>
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="movie-list">
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
