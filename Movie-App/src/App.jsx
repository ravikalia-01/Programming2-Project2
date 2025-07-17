import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CategoriesPage';
import AddMoviePage from './components/AddMoviePage';
import SearchPage from './components/SearchPage';
import ProfilePage from './components/ProfilePage';
import './App.css'; // Assuming you have some styles for the app

const App = () => {
  const [userMovies, setUserMovies] = useState([]); // Store user added movies

  // Handle adding a new movie to userMovies state
  const handleAddMovie = (newMovie) => {
    setUserMovies((prevMovies) => [...prevMovies, newMovie]);
  };
  return (
    <Router>
      <Header />
      <Routes>
         <Route  path="/"  element={<HomePage userMovies={userMovies} />}  />
         <Route path="/categories" element={<CategoriesPage />} />
         <Route   path="/add-movie"   element={<AddMoviePage onAddMovie={handleAddMovie} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
