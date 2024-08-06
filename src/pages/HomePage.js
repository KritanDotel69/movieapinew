import React from 'react'
import { useMovieByCategroyQuery } from '../feature/movieApi'



const HomePage = () => {

const data = useMovieByCategroyQuery('popular');
console.log(data);

  return (
    <>
    
    </>
  )
}

export default HomePage
