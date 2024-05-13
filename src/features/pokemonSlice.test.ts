// @ts-nocheck
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import reducer, { selectPoke } from './pokemonSlice';

describe('pokesSlice', () => {
  describe('reducer', () => {
    it('should not add a poke if it already exists in state', () => {
      const initialState: RootState['pokes'] = [
        {
          id: 1,
          name: 'bulbasaur',
        },
      ];
      const existingPoke: any = {
        id: 1,
        name: 'bulbasaur',
      };
      const action: PayloadAction<any> = {
        type: 'pokeApi/executeQuery/fulfilled',
        payload: existingPoke,
      };
      const newState = reducer(initialState, action);

      expect(newState).toEqual(initialState);
    });
  });

  describe('selectPoke', () => {
    it('should return the selected poke from state', () => {
      const currentState: RootState['pokes'] = [
        {
          id: 1,
          name: 'bulbasaur',
        },
        {
          id: 2,
          name: 'charmander',
        },
      ];
      const selectedPoke = selectPoke({ pokes: currentState }, 'charmander');

      expect(selectedPoke).toEqual(currentState[1]);
    });

    it('should return undefined if the selected poke is not found in state', () => {
      const currentState: RootState['pokes'] = [
        {
          id: 1,
          name: 'bulbasaur',
        },
        {
          id: 2,
          name: 'charmander',
        },
      ];
      const selectedPoke = selectPoke({ pokes: currentState }, 'squirtle');

      expect(selectedPoke).toBeUndefined();
    });
  });
});
