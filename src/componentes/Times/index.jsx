import styled from "styled-components"
import useTimesContext from "../../contexto/useTimesContext";
import Cards from "../Cards";
import useColaboradoresContext from "../../contexto/useColaboradoresContext";

const SectionEstilizada = styled.section`
  width: 100%;

  .divTopo{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .divTopo > h2{
    flex-grow: 0.5;
    font-size: 40px;
    font-weight: 400;
    line-height: 72px;
    text-align: center;
    color: #6278F7;
    padding-left: 108px;
  }

  .divTopo > img{
    cursor: pointer;
  }

  @media(max-width: 830px){
    .divTopo > h2{
      font-size: 30px;
      padding-left: 50px;
    }

    .divTopo > img{
      width: 90px;
      height: 90px;
    }
  }
`

const Times = () => {
  const { times } = useTimesContext();
  const { colaboradores } = useColaboradoresContext()

  function botaoFormulario(){
    let formularioColaborador = document.querySelector(".formularioColaborador")

    if(formularioColaborador.style.display == "none"){ formularioColaborador.style.display = "flex" }
    else{ formularioColaborador.style.display = "none" }
  }

  return(
    <SectionEstilizada>
      <div className="divTopo">
        <h2>Minha Organização:</h2>
        <img src="/public/addBotao.png" alt="Botao add" onClick={botaoFormulario}/>
      </div>
      
      {times.map(time => {
        const colaboradoresDoTime = colaboradores.filter(colaborador => colaborador.time === time.nome);

        if(colaboradoresDoTime.length > 0){
          return (
            <Cards
              key={time.id}
              timeNome={time.nome}
            />
          );
        }
        return null;
      })}
    </SectionEstilizada>
  )
}

export default Times