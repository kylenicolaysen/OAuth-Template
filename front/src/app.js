import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { GoogleOAuthProvider } from '@react-oauth/google'

const store = configureStore()

const jsx = (
    <GoogleOAuthProvider clientId="218915995641-pmaencqvs4uqqkhnkngutkvorbec80eh">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </GoogleOAuthProvider>
)

const root = createRoot(document.getElementById('app'))
root.render(jsx)