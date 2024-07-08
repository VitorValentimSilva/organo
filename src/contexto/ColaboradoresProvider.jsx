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

  const editarColaborador = async (dadosColaborador) => {
    try {
      const response = await fetch(`https://tourmaline-climbing-runner.glitch.me/colaboradores/${dadosColaborador.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosColaborador),
      });
  
      if (!response.ok) {
        throw new Error('Falha ao atualizar o Colaborador');
      }

      const colaboradorAtualizado = await response.json();
      setColaboradores((colaboradores) =>
        colaboradores.map((colaborador) => (colaborador.id === dadosColaborador.id ? { ...colaborador, ...colaboradorAtualizado } : colaborador))
      );
  
      alert('Colaborador atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar o Colaborador:', error);
    }
  };

  return (
    <ColaboradoresContext.Provider value={{ colaboradores, adicionarColaborador, editarColaborador }}>
      {children}
    </ColaboradoresContext.Provider>
  );
};

ColaboradoresProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ColaboradoresProvider;