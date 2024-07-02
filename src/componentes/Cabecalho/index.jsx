import styled from "styled-components"
import PropTypes from 'prop-types';

const HeaderEstilizado = styled.header`
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 350px;
  padding-top: 4%;
  padding: 4% 8% 0 8%;

  > img{
    width: 400px;
    height: 350px;
    border-radius: 10px;
  }

  @media(max-width: 1000px){
    justify-content: center;
    text-align: center;

    > img{
      display: none;
    }

    > div{
      h1{
        text-align: center;
      }

      p{
        text-align: center;
      }
    }
  }

  @media(max-width: 600px){
    > div{
      h1{
        font-size: 50px;
      }

      p{
        font-size: 25px;
      }
    }
  }
`

const DivEstilizada = styled.div`
  img{
    margin-bottom: 15%;
  }

  h1{
    font-size: 72px;
    font-weight: 400;
    line-height: 72px;
    text-align: left;
    margin: 0;
  }

  p{
    font-size: 36px;
    font-weight: 400;
    line-height: 72px;
    text-align: left;
    margin: 0;
  }
`

const Cabecalho = ({ cor }) => {
  return(
    <HeaderEstilizado color={cor}>
      <DivEstilizada>
        <img src="/public/logo.png" alt="Logo"/>
        <h1>Pessoas e Times</h1>
        <p>Organizados em um so lugar!</p>
      </DivEstilizada>

      <img src="/public/imagemHeader.png" alt="Imagem do Header"/>
    </HeaderEstilizado>
  )
}

Cabecalho.propTypes = {
  cor: PropTypes.string.isRequired,
};

export default Cabecalho