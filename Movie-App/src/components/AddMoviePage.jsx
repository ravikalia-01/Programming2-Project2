import React, { useState } from 'react';

const AddMoviePage = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');
  const [runtime, setRuntime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new movie object
    const newMovie = {
      Title: title,
      Year: year,
      Poster: poster,
      Runtime: runtime,
      imdbRating: 'N/A', // You can set a default value for IMDb rating if not available
    };

    // Pass the new movie back to HomePage
    onAddMovie(newMovie);

    // Clear the form
    setTitle('');
    setYear('');
    setPoster('');
    setRuntime('');
  };

  return (
    <div className="add-movie-page">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <input
          type="text"
          placeholder="Runtime"
          value={runtime}
          onChange={(e) => setRuntime(e.target.value)}
        />
       
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMoviePage;
