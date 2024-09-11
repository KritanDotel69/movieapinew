import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const movieApi = createApi ({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
  endpoints:(builder) => ({

    movieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        params: {
          api_key: '857e7f7fca5cb29148c33fbac08ea51d'
        }
      })
    }),


    
  })
});



export const { useMovieByCategoryQuery } = movieApi;