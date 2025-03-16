import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({moviesList}) => {
  return (
   <div className='w-full '>
    <div className='flex flex-wrap gap-4 justify-center mx-auto w-[90%]  p-4'>
      {moviesList.map((m)=>(
        <MovieCard movies={m} key={m.id}/>
      ))}
    </div>
    </div>
  )
}

export default MovieList
