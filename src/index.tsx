import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store, persistor } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from 'redux-persist/integration/react';

import './index.css'

const rootElement = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(rootElement as HTMLElement)

reactRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
