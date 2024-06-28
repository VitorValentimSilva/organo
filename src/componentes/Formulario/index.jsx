import styled from "styled-components"
import CampoFormulario from "../CampoFormulario"
import ListaSuspensa from "../ListaSuspensa"

const SectionEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F6F6F6;
  width: 1000px;
  height: 810px;
  box-shadow: 0px 4px 4px 0px #0000007f;
  border-radius: 15px;
  margin: 5% 0;

  h2{
    font-size: 32px;
    font-weight: 400;
    line-height: 43.36px;
    margin-bottom: 4%;
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label{
    font-size: 18px;
    font-weight: 600;
    line-height: 21.94px;
    text-align: left;
  }

  input, select{
    width: 800px;
    height: 75px;
    border: 1px solid #FFF;
    box-shadow: 10px 10px 30px 0px #00000030;
    border-radius: 15px;
    margin-bottom: 4%;
    padding-left: 2.6%;
    font-size: 18px;
  }

  select{
    width: 823px;
  }

  button{
    cursor: pointer;
    background-color: #6278F7;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.38px;
    text-align: center;
    width: 155px;
    height: 72px;
    border: 1px solid #6278F7;
    box-shadow: 10px 10px 30px 0px #00000030;
    border-radius: 15px;
  }

  button:hover{
    background-color: #6278f7e2;
    border-color: #6278f7e2;
  }
`

const Formulario = () => {


  return(
    <SectionEstilizado>
      <h2>Preencha os dados para criar o card do colaborador.</h2>
      
      <form>
        <CampoFormulario
          nomeCampo="Nome"
          tipoInput="text"
          placeholder="Digite o seu nome"
          obrigatorio={true}
        />

        <CampoFormulario 
          nomeCampo="Cargo"
          tipoInput="text"
          placeholder="Digite o seu cargo"
          obrigatorio={true}
        />

        <CampoFormulario 
          nomeCampo="Imagem"
          tipoInput="url"
          placeholder="Informe o endereço da imagem"
          obrigatorio={true}
        />

        <ListaSuspensa 
          nome="Time"
        />

        <button>Criar Card</button>
      </form>
    </SectionEstilizado>
  )
}

export default Formulario