import react from 'react';
import { useState } from 'react'
import './App.scss';
import MovieInfo from './data';
import MovieList from './components/MovieList';
import AddaMovie from './components/AddaMovie';
function App() {

  return (
    <div className="movieCard">
      <h1>Your Favorite Movies</h1>
        <MovieList MovieInfo={MovieInfo} />
        <AddaMovie />
    </div>
  )
}

export default App
