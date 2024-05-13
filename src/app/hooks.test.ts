// @ts-nocheck
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from './hooks';
import type { RootState, AppDispatch } from './store';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('useAppDispatch', () => {
  it('should return a function that matches the AppDispatch type', () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const dispatch = useAppDispatch();

    expect(dispatch).toEqual(expect.any(Function));

    const dispatchTypeCheck: AppDispatch = dispatch;
    expect(dispatchTypeCheck).toEqual(mockDispatch);
  });
});

describe('useAppSelector', () => {
  it('should return a function that matches the TypedUseSelectorHook<RootState> type', () => {
    const mockSelector = jest.fn();
    (useSelector as jest.Mock).mockReturnValue(mockSelector);

    const selector = useAppSelector();

    expect(selector).toEqual(expect.any(Function));

    const selectorTypeCheck: TypedUseSelectorHook<RootState> = selector;
    expect(selectorTypeCheck).toEqual(mockSelector);
  });
});
