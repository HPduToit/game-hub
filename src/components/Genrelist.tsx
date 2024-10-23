import React from 'react'
import useGenres from '../hooks/useGenres'

const Genrelist = () => {
    const {genres} = useGenres();
  return (
    <ul>
        {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default Genrelist