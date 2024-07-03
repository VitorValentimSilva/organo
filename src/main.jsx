import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import { TimesProvider } from './contexto/TimesProvider'
import ColaboradoresProvider from './contexto/ColaboradoresProvider'
import LoginProvider from './contexto/LoginProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimesProvider>
        <ColaboradoresProvider>
          <LoginProvider>
            <AppRoutes />
          </LoginProvider>
        </ColaboradoresProvider>
    </TimesProvider>
  </React.StrictMode>,
)