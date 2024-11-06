import React from 'react'
import MovieList from './MovieList.jsx';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className='bg-black w-screen'>
      <div className='mt-0 pl-0 md:pl-12 relative pr-0 md:pr-12 z-[10px]'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
        
      </div>
    </div>
  )
}

export default SecondaryContainer;