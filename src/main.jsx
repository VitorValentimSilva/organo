import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import { TimesProvider } from './contexto/TimesProvider'
import ColaboradoresProvider from './contexto/ColaboradoresProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimesProvider>
        <ColaboradoresProvider>
          <AppRoutes />
        </ColaboradoresProvider>
    </TimesProvider>
  </React.StrictMode>,
)