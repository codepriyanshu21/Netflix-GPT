import React from 'react'
import MovieCard from './MovieCard.jsx'

const MovieList = ({ title, movies }) => {
   
    return (
        <div className='px-6 '>
            <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>

                <div className='flex'>
                    {Array.isArray(movies) && movies.length > 0 ? (
                        movies.map((movie) => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        ))
                    ) : (
                        <p>No movies available.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieList;
