import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from '@reduxjs/toolkit/query/react'

import ReactDOM from 'react-dom/client'

import { pokemonApi } from './services/pokemon'

import App from './App'
import './index.css'

const rootElement = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(rootElement as HTMLElement)

reactRoot.render(
  <BrowserRouter>
    <ApiProvider api={pokemonApi}>
      <App />
    </ApiProvider>
  </BrowserRouter>,
)
