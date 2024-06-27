import styled from "styled-components"
import Formulario from "../../componentes/Formulario"

const MainEstilizado = styled.main`
  display: flex;
  justify-content: center;
`

const Inicio = () => {
  return(
    <MainEstilizado>
      <Formulario />
    </MainEstilizado>
  )
}

export default Inicio