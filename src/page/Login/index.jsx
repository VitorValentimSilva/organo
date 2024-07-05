import { useState } from 'react';
import styled from 'styled-components';
import useLoginContext from "../../contexto/useLoginContext";
import { useNavigate } from 'react-router-dom';
import EstilosGlobais from "../../componentes/EstilosGlobais"

const MainEstilizado = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const DivEstilizada = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #dbdbdb;
  border-radius: 15px;
  box-shadow: 3.5px 3.5px #0000002f;
  width: 400px;
  height: 320px;
`;

const FormEstilizado = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  
  label {
    margin-bottom: 8px;
  }
  
  input[type="email"],
  input[type="password"] {
    margin-bottom: 16px;
    padding: 8px;
    font-size: 16px;
    border-radius: 10px;
  }

  input[type="submit"] {
    padding: 10px;
    font-size: 16px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  input[type="submit"]:hover {
    background-color: #0056b3;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useLoginContext()
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    
    if (login(email, senha)) {
      navigate('/adm/listaTimes');
    } else {
      alert("Email ou senha inválido!");
    }
  };

  return (
    <>
      <EstilosGlobais />
      <MainEstilizado>
        <DivEstilizada>
          <FormEstilizado onSubmit={onSubmit}>
            <label htmlFor="iEmail">Email</label>
            <input
              type="email"
              name="email"
              id="iEmail"
              required
              placeholder="Digite o seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="iSenha">Senha</label>
            <input
              type="password"
              name="senha"
              id="iSenha"
              required
              placeholder="Digite a sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <input type="submit" value="Logar" />
          </FormEstilizado>
        </DivEstilizada>
      </MainEstilizado>
    </>
    
  );
};

export default Login;