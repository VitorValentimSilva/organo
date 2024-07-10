import { useState } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SectionEstilizada = styled.section`
  background-color: #1c1c1c;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media(max-width: 830px){
    height: 250px;
    min-height: 0%;
    padding: 25px 0 0 0;
    margin-bottom: 15px;
  }

  @media(max-width: 450px){
    align-items: normal;
  }
`;

const NavEstilizado = styled.nav`
  color: #FFFFFF;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-left: 25px;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 15px 0;
      cursor: pointer;
      position: relative;
      background-color: #333;
      padding: 10px 15px;
      border-radius: 5px;
      transition: background-color 0.3s;
      text-align: center;

      &:hover {
        background-color: #444;
      }

      ul {
        list-style: none;
        padding-left: 0;
        position: absolute;
        top: 0;
        left: 100%;
        background-color: #444;
        border-radius: 5px;
        display: none;
        min-width: 200px;

        li {
          margin: 5px 0;
          padding: 5px;
          background-color: #555;
          border-radius: 5px;

          a {
            color: #FFFFFF;
            text-decoration: none;
            display: block;
            padding: 5px 10px;

            &:hover {
              background-color: #666;
            }
          }
        }
      }

      &:hover ul {
        display: block;
      }
    }
  }

  @media(max-width: 830px){
    width: 30%;
    max-width: 200px;

      li{
        padding: 10px 10px;
      }
    
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;

  @media(max-width: 830px){
    display: none;
  }
`;

const Titulo = styled.h1`
  color: #FFFFFF;
  margin-top: 50px;
  text-align: center;
  font-size: 35px;
  border-bottom: 2px solid #FFFFFF;
  padding-bottom: 10px;

  @media(max-width: 830px){
    font-size: 30px;
    margin-top: 0;
  }
`;

const Navegacao = ({ nomeNav1, nomeNav2 }) => {
  const [Nav1Open, setNav1Open] = useState(false);
  const [Nav2Open, setNav2Open] = useState(false);

  const clickNav1 = () => {
    setNav1Open(!Nav1Open);
  };

  const clickNav2 = () => {
    setNav2Open(!Nav2Open);
  };

  return (
    <SectionEstilizada>
      <Link to='/'>
        <Logo src="/logo.png" alt="Logo" />
      </Link>

      <Titulo>Painel Administrativo</Titulo>

      <NavEstilizado>
        <ul>
          <li onClick={clickNav1}>
            {nomeNav1}
            {Nav1Open && (
              <ul>
                <li><Link to={`/adm/lista${nomeNav1}`}>Lista de {nomeNav1}</Link></li>
                <li><Link to={`/adm/adicionar${nomeNav1}`}>Adicionar {nomeNav1}</Link></li>
              </ul>
            )}
          </li>
          <li onClick={clickNav2}>
            {nomeNav2}
            {Nav2Open && (
              <ul>
                <li><Link to={`/adm/lista${nomeNav2}`}>Lista de {nomeNav2}</Link></li>
                <li><Link to='/'>Adicionar {nomeNav2}</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </NavEstilizado>
    </SectionEstilizada>
  );
};

Navegacao.propTypes = {
  nomeNav1: PropTypes.string.isRequired,
  nomeNav2: PropTypes.string.isRequired,
};

export default Navegacao;