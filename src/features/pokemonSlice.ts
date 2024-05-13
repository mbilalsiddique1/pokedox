import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { pokesApi } from '../services/pokemons'
import type { PokeDetail } from '../services/pokemons'
import { RootState } from '../app/store';

const initialState = [] as PokeDetail[]

const slice = createSlice({
  name: 'pokes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(pokesApi.endpoints.getPoke.matchFulfilled, (state, action: PayloadAction<PokeDetail>) => {
        const poke = state.find((poke) => poke.id === action.payload.id)
        if (!poke) {
          return [...state, action.payload];
        }
        return state;
      })
  },
})

export const selectPoke = (state: RootState, currentPoke: any) => {
  return state.pokes.find((poke) => poke.name === currentPoke)
};

export default slice.reducer
