import styled from "styled-components"
import Formulario from "../../componentes/Formulario"
import Times from "../../componentes/Times"

const MainEstilizado = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Inicio = () => {
  return(
    <MainEstilizado>
      <Formulario />
      
      <Times />
    </MainEstilizado>
  )
}

export default Inicio