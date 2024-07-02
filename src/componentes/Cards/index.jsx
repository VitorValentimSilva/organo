import styled from "styled-components"
import PropTypes from 'prop-types';
import useColaboradoresContext from "../../contexto/useColaboradoresContext";
import Colaboradores from "../Colaboradores";

const CorTime = (timeNome) => {
  switch (timeNome) {
    case 'Programação':
      return { corPrimaria: '#00C86F26', corSecundaria: '#00a870' };
    case 'Front-End':
      return { corPrimaria: '#E8FFFF', corSecundaria: '#00FFFF' };
    case 'Data Science':
      return { corPrimaria: '#E9FFE3', corSecundaria: '#A9FFA3' };
    case 'Devops':
      return { corPrimaria: '#F1616526', corSecundaria: '#F16165' };
    case 'UX e Design':
      return { corPrimaria: '#DC6EBE26', corSecundaria: '#DC6EBE' };
    case 'Mobile':
      return { corPrimaria: '#FFBA0526', corSecundaria: '#FFBA05' };
    case 'Inovação e Gestão':
      return { corPrimaria: '#FF8C2A26', corSecundaria: '#FF8C2A' };
    default:
      return { corPrimaria: '#ff6b6b', corSecundaria: '#FF4C4C' };
  }
};

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.corprimaria};

  h3{
    font-size: 32px;
    font-weight: 400;
    line-height: 43.36px;
    text-align: center;
    color: #212121;
    border-bottom: 3px solid ${(props) => props.corsecundaria};
    display: inline-block;
  }

  .divContainer{
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    padding-bottom: 50px;
  }

  .divColaborador{
    width: 262px;
    height: 272px;
    background: ${(props) => props.corsecundaria};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    img{
      width: 130px;
      height: 130px;
      border-radius: 100%;
      position: absolute;
      top: 32px;
    }

    div{
      width: 100%;
      height: 100%;
      background-color: #FFF;
      border-radius: 0 0 15px 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      margin-top: 85px;

      h4{
        font-size: 20px;
        font-weight: 600;
        line-height: 21.94px;
        text-align: center;
        color: #6278F7;
        margin: 75px 0 0 0;
      }

      p{
        font-size: 16px;
        font-weight: 400;
        line-height: 19.5px;
        text-align: center;
        color: #212121;
        margin: 0;
        width: 80%;
      }
    }
  }
`

const Cards = ({ timeNome }) => {
  const { colaboradores } = useColaboradoresContext()

  const { corPrimaria, corSecundaria } = CorTime(timeNome);

  return(
    <DivEstilizada corprimaria={corPrimaria} corsecundaria={corSecundaria}>
      <h3>{timeNome}</h3>

      <div className="divContainer">
        {colaboradores.filter(colaborador => colaborador.time == timeNome).map(colaborador => (
          <Colaboradores
            key={colaborador.id}
            img={colaborador.img}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
          />
        ))}
      </div>
    </DivEstilizada>
  )
}

Cards.propTypes = {
  timeNome: PropTypes.string.isRequired,
};

export default Cards