// @ts-nocheck
import { store, persistor } from './store';

describe('Redux Store Configuration', () => {
  it('should configure the Redux store correctly', () => {
    expect(store).toBeDefined();
    expect(persistor).toBeDefined();
  });
})
