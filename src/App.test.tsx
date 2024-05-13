// @ts-nocheck
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders the App component', async () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText('Pokédex')).toBeInTheDocument();
});
