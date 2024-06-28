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

  return (
    <TimesContext.Provider value={{ times }}>
      {children}
    </TimesContext.Provider>
  );
};

TimesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TimesProvider;