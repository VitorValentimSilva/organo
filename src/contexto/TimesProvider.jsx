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

  return (
    <TimesContext.Provider value={{ times, editarTime }}>
      {children}
    </TimesContext.Provider>
  );
};

TimesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TimesProvider;