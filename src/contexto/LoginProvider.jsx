import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LoginContext } from './Contextos';

export const LoginProvider = ({ children }) => {
  const [loginData, setLoginData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch('https://tourmaline-climbing-runner.glitch.me/login')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setLoginData(dados);
      });
  }, []);

  const login = (email, senha) => {
    const user = loginData.find(logins => logins.email === email && logins.senha === senha);
    if (user) {
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <LoginContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginProvider;