import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TimesContext } from './Contextos';

export const TimesProvider = ({ children }) => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetch('https://tourmaline-climbing-runner.glitch.me/times')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTimes(dados);
      });
  }, []);

  const editarTime = async (dadosTime) => {
    try {
      const response = await fetch(`https://tourmaline-climbing-runner.glitch.me/times/${dadosTime.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosTime),
      });
  
      if (!response.ok) {
        throw new Error('Falha ao atualizar o Time');
      }

      const timeAtualizado = await response.json();
      setTimes((times) =>
        times.map((time) => (time.id === dadosTime.id ? { ...time, ...timeAtualizado } : time))
      );
  
      alert('Time atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar o Time:', error);
    }
  };

  const excluirTime = async (id) => {
    try {
      const response = await fetch(`https://tourmaline-climbing-runner.glitch.me/times/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Falha ao excluir time');
      }

      setTimes((times) => times.filter((time) => time.id !== id));
      alert('Time excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir time:', error);
    }
  };

  const adicionarTime = async (novoTime) => {
    try{
      const response = await fetch('https://tourmaline-climbing-runner.glitch.me/times', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoTime),
      });

      if (!response.ok) {
        throw new Error('Falha ao adicionar o time');
      }

      const adicionaTime = await response.json();
      setTimes([...times, adicionaTime]);
      alert('Time adicionado com sucesso!');
    }
    catch(error){
      console.error('Erro ao adicionar o TIme:', error);
    }
  }

  return (
    <TimesContext.Provider value={{ times, editarTime, excluirTime, adicionarTime }}>
      {children}
    </TimesContext.Provider>
  );
};

TimesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TimesProvider;