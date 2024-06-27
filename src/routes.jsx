import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./page/Inicio"
import PaginaBase from "./page/PaginaBase"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <PaginaBase /> }>
          <Route index element={ <Inicio /> } />
          <Route path="*" element={ <Inicio /> } />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
