import { createSlice } from '@reduxjs/toolkit'
import { pokesApi } from '../app/services/pokemons'
import type { PokeDetail } from '../app/services/pokemons'
import { RootState } from '../app/store';

const initialState = [] as PokeDetail[]

const slice = createSlice({
  name: 'pokes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(pokesApi.endpoints.getPoke.matchFulfilled, (state, action) => {
        const poke = state.find((poke) => poke.id === action.payload.id)
        if (!poke) {
          state.push(action.payload)
        }
      })
  },
})

export const selectPoke = (state: RootState, currentPoke: any) => {
  // filter currentPoke from state.pokes
  return state.pokes.find((poke) => poke.name === currentPoke)
};

export default slice.reducer
