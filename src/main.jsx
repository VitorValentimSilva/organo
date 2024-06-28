import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import { TimesProvider } from './contexto/TimesProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimesProvider>
        <AppRoutes />
    </TimesProvider>
  </React.StrictMode>,
)