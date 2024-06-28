import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ColaboradoresContext } from './Contextos';

export const ColaboradoresProvider = ({ children }) => {
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    fetch('https://tourmaline-climbing-runner.glitch.me/colaboradores')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setColaboradores(dados);
      });
  }, []);

  const adicionarColaborador = async (novoColaborador) => {
    try{
      const response = await fetch('https://tourmaline-climbing-runner.glitch.me/colaboradores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoColaborador),
      });

      if (!response.ok) {
        throw new Error('Falha ao adicionar o colaborador');
      }

      const adicionaColaborador = await response.json();
      setColaboradores([...colaboradores, adicionaColaborador]);
      alert('Colaborador adicionado com sucesso!');
    }
    catch(error){
      console.error('Erro ao adicionar o colaborador:', error);
    }
  }

  return (
    <ColaboradoresContext.Provider value={{ colaboradores, adicionarColaborador }}>
      {children}
    </ColaboradoresContext.Provider>
  );
};

ColaboradoresProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ColaboradoresProvider;