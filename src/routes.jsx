import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./page/Inicio"
import PaginaBase from "./page/PaginaBase"
import Login from "./page/Login"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <PaginaBase /> }>
          <Route index element={ <Inicio /> } />
          <Route path="*" element={ <Inicio /> } />    
        </Route>
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
