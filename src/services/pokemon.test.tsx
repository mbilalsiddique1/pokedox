// @ts-nocheck
import fetchMock from 'jest-fetch-mock';
import { renderHook, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { useGetPokesQuery, useGetPokeQuery } from './pokemons';

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('useGetPokesQuery', () => {
  const data = {};

  beforeEach(() => {
    fetchMock.mockOnceIf(process.env.REACT_APP_BASE_API_URL, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify({ data }),
      })
    );
  });

  it('renders hook', async () => {
    const { result } = renderHook(() => useGetPokesQuery(), {
      wrapper,
    });

    expect(result.current).toMatchObject({
      status: 'pending',
      endpointName: 'getPokes',
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
      data,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current).toMatchObject({
      status: 'fulfilled',
      data,
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: data,
      isFetching: false,
    });
  });
});

// beforeAll(() => {
//   fetchMock.mockOnceIf('https://pokeapi.co/api/v2/pokemon/pikachu', () =>
//     Promise.resolve({
//       status: 200,
//       body: JSON.stringify({ data }),
//     })
//   );
// });

// function wrapper({ children }: { children: ReactNode }) {
//   return <Provider store={store}>{children}</Provider>;
// }

// it('render hook', () => {
//   const { result } = renderHook(() => useGetPokesQuery(), { wrapper });

//   expect(result.current.isLoading).toBe(true);

// });
