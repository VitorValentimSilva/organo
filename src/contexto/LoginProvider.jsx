import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LoginContext } from './Contextos';

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState({});

  useEffect(() => {
    fetch('https://tourmaline-climbing-runner.glitch.me/login')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setLogin(dados);
      });
  }, []);

  return (
    <LoginContext.Provider value={{ login }}>
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;