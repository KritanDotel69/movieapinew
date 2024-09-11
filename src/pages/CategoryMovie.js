import React from 'react'
import { useParams } from 'react-router'
import { useMovieByCategoryQuery } from '../feature/movieApi';
import Loading from '../components/Loading';

import ErrorPage from '../components/ErrorPage';

const CategoryMovie = () => {

  const {category} =  useParams();



  const {isLoading, isError, error, data} = useMovieByCategoryQuery(category ?? 'now_playing');
if (isLoading) {
 return <Loading />

}

if (isError) {
  return <ErrorPage error={error} />
}

  return (
    <div className="grid grid-cols-3 p-5 gap-5">
    {data && data.results.map((movie) => {
      return <div key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" class="rounded-3xl" /> 
        <h1>{movie.overview.substring(0, 100) +'...'}</h1>
      </div>
    })}
  </div>
  
  )
}

export default CategoryMovie
