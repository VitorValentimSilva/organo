import styled from "styled-components"
import Navegacao from "../../componentes/Navegacao"
import EstilosGlobais from "../../componentes/EstilosGlobais"
import { Outlet } from "react-router-dom"

const MainEstilizado = styled.main`
  display: flex;
  height: 100vh;

  @media(max-width: 830px){
    flex-direction: column;
    gap: 45px;
    height: auto;
    padding-bottom: 7%;
  }
`

const AdmPagina = () => {
  return(
    <>
      <EstilosGlobais />
      <MainEstilizado>
        <Navegacao 
          nomeNav1="Times"
          nomeNav2="Colaboradores"
        />

        <Outlet />
      </MainEstilizado>
    </>
    
  )
}

export default AdmPagina