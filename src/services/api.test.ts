// @ts-nocheck
import { baseQueryWithRetry } from './api';
import { createApi } from '@reduxjs/toolkit/query/react';

describe('API Configuration', () => {
  it('should configure the API correctly', () => {
    const api = createApi({
      reducerPath: 'pokeApi',
      baseQuery: baseQueryWithRetry,
      keepUnusedDataFor: 30,
      refetchOnMountOrArgChange: 30,
      endpoints: () => ({}),
    });
    expect(api).toBeDefined();
  });

  it('should configure the baseQuery correctly', () => {
    expect(baseQueryWithRetry).toBeDefined();
  });
});
