import styled from "styled-components"
import Navegacao from "../../componentes/Navegacao"
import EstilosGlobais from "../../componentes/EstilosGlobais"

const MainEstilizado = styled.main`
  display: flex;
  height: 100vh;
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

      </MainEstilizado>
    </>
    
  )
}

export default AdmPagina