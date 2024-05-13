import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL || 'https://pokeapi.co/api/v2/',
})

export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
  reducerPath: 'pokeApi',
  baseQuery: baseQueryWithRetry,
  keepUnusedDataFor: 30,
  refetchOnMountOrArgChange: 30,
  endpoints: () => ({}),
})
