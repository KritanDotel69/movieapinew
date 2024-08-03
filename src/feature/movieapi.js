import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'













export const movieapi = createApi({
  reducerPath: 'movieapi',
  baseQuery: fetchBaseQuery({ baseUrl:'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getMovieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        headers: {

        }

      })
    }),

})
});
