import styled from "styled-components"
import iconeGitHub from '../../assets/icon/iconeGitHub.png'
import iconeLinkeDin from '../../assets/icon/iconeLinkeDin.png'
import PropTypes from 'prop-types';

const FooterEstilizado = styled.footer`
  background-color: ${(props) => props.cor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 180px;

  div{
    display: flex;
    gap: 20px;
  }

  p{
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 500;
    line-height: 24.38px;
    text-align: right;
  }

  @media(max-width: 690px){
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 220px;

    img{
      width: 150px;
    }

    > div > a > img{
      width: 50px;
      height: 50px;
      margin-top: 15px;
    }

    p{
      font-size: 17px;
    }
  }
`

const Rodape = ({ cor }) => {
  return(
    <FooterEstilizado cor={cor}>
      <div>
        <a href="https://github.com/VitorValentimSilva" target="_blank"><img src={iconeGitHub} alt="Icone Do GitHub"/></a>
        <a href="https://www.linkedin.com/in/vitor-valentim-desenvolvedor/" target="_blank"><img src={iconeLinkeDin} alt="Icone Do LinkeDin"/></a>
      </div>

      <img src="/logo.png" alt="Logo Organo"/>

      <p>Desenvolvido por Vitor Valentim</p>
    </FooterEstilizado>
  )
}

Rodape.propTypes = {
  cor: PropTypes.string.isRequired,
};

export default Rodape