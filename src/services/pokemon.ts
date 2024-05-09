import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { IPokemonList, IPokemonDetails } from './types'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => 'pokemon?limit=10&offset=0',
    }),
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetPokemonQuery, useGetPokemonByNameQuery } = pokemonApi
