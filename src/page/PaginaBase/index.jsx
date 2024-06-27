import { Outlet } from "react-router-dom"
import Cabecalho from "../../componentes/Cabecalho"
import EstilosGlobais from "../../componentes/EstilosGlobais"
import Rodape from "../../componentes/Rodape"


const PaginaBase = () => {
  return(
    <>
      <EstilosGlobais />
      <Cabecalho 
        cor="#6278F7"
      />
      <Outlet />
      <Rodape 
        cor="#6278F7"
      />
    </>
  )
}

export default PaginaBase