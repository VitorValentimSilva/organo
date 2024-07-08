import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./page/Inicio"
import PaginaBase from "./page/PaginaBase"
import Login from "./page/Login"
import AdmPagina from "./page/AdmPaginaBase"
import ProtectedRoute from "./componentes/ProtectedRoute/ProtectedRoute"
import ListaDeTimes from "./page/ListaDeTimes"
import ListaDeColaboradores from "./page/ListaDeColaboradores"
import AdicionarTime from "./page/AdicionarTime"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <PaginaBase /> } >
          <Route index element={ <Inicio /> } />
          <Route path="*" element={ <Inicio /> } />
        </Route>
        <Route path="/login" element={ <Login /> } />
        <Route path="/adm" element={<ProtectedRoute element={ <AdmPagina /> } />}>
          <Route path="listaTimes" element={ <ListaDeTimes /> } />
          <Route path="adicionarTimes" element={ <AdicionarTime /> } />
          <Route path="listaColaboradores" element={ <ListaDeColaboradores /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;