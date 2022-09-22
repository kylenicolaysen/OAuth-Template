import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

const store = configureStore()

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
)

const root = createRoot(document.getElementById('app'))
root.render(jsx)