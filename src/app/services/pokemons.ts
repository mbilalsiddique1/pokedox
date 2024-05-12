import { api } from './api'

interface Sprites {
  front_default: string;
}

interface Species {
  name: string;
}

export interface PokeDetail {
  id: number;
  name: string;
  sprites: Sprites;
  species: Species;
  types: any[];
  weight: number;
  height: number;
  moves: any[];
  stats: any[];
}

export interface Poke {
  name: string;
  url: string;
}

export interface Pokes {
  count: string;
  next: string;
  previous: string;
  results: Poke[];
}

type PokesResponse = Pokes

export const pokesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPokes: build.query<PokesResponse, void>({
      query: () => ({ url: 'pokemon' }),
    }),
    getPoke: build.query<PokeDetail, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response: PokeDetail) => {
        return {
          id: response.id,
          name: response.name,
          sprites: response.sprites,
          species: response.species,
          types: response.types,
          weight: response.weight,
          height: response.height,
          moves: response.moves,
          stats: response.stats,
        };
      },
    }),
    getErrorProne: build.query<{ success: boolean }, void>({
      query: () => 'error-prone',
    }),
  }),
})

export const {
  useGetPokeQuery,
  useGetPokesQuery,
  useGetErrorProneQuery,
} = pokesApi

export const {
  endpoints: { getPokes, getPoke },
} = pokesApi
