import styled from "styled-components";
import CampoFormulario from "../CampoFormulario";
import ListaSuspensa from "../ListaSuspensa";
import { useState } from "react";
import useColaboradorContext from "../../contexto/useColaboradoresContext";
import useTimesContext from "../../contexto/useTimesContext";
import PropTypes from "prop-types";

const SectionEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F6F6F6;
  width: 1000px;
  height: 810px;
  box-shadow: 0px 4px 4px 0px #0000007f;
  border-radius: 15px;
  margin: 5% 0;

  h2 {
    font-size: 32px;
    font-weight: 400;
    line-height: 43.36px;
    margin-bottom: 4%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    line-height: 21.94px;
    text-align: left;
  }

  input, select {
    width: 800px;
    height: 75px;
    border: 1px solid #FFF;
    box-shadow: 10px 10px 30px 0px #00000030;
    border-radius: 15px;
    margin-bottom: 4%;
    padding-left: 2.6%;
    font-size: 18px;
  }

  select {
    width: 823px;
  }

  button {
    cursor: pointer;
    background-color: #6278F7;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.38px;
    text-align: center;
    width: 155px;
    height: 72px;
    border: 1px solid #6278F7;
    box-shadow: 10px 10px 30px 0px #00000030;
    border-radius: 15px;
  }

  button:hover {
    background-color: #6278f7e2;
    border-color: #6278f7e2;
  }

  .error {
    border-color: red;
  }

  ${(props) =>
    props.nomeformulario === "time" &&
    `
    width: 100%;
    background-color: #FFF;
    box-shadow: none;
  `}


  @media (max-width: 1020px) {
    width: 800px;

    input, select {
      width: 600px;
    }

    select {
      width: 623px;
    }
  }

  @media (max-width: 830px) {
    width: 360px;
    height: 680px;

    form {
      align-items: center;
      justify-content: center;
    }

    input, select {
      width: 300px;
      height: 65px;
    }

    select {
      width: 323px;
    }

    button {
      height: 67px;
    }

    h2 {
      font-size: 22px;
      text-align: center;
    }
  }
`;

const Formulario = ({ nomeFormulario }) => {
  const { adicionarColaborador } = useColaboradorContext();
  const { adicionarTime } = useTimesContext();
  const [nomeColaborador, setNomeColaborador] = useState('');
  const [cargo, setCargo] = useState('');
  const [img, setImg] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');
  const [errors, setErrors] = useState({});

  function URLValida(string) {
    var res = string.match(/(http|https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/);
    return (res !== null);
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    if (nomeFormulario === "colaborador") {
      if (!nomeColaborador || nomeColaborador.length < 10) {
        newErrors.nomeColaborador = "O nome é obrigatório e tem que ter mais de 10 caracteres!";
      }
      if (!cargo || cargo.length < 5) {
        newErrors.cargo = "O cargo é obrigatório e tem que ter mais de 5 caracteres!";
      }
      if (!img || !URLValida(img)) {
        newErrors.img = "A imagem é obrigatória e tem que ser uma URL!";
      }
      if (!time) {
        newErrors.time = "O time é obrigatório!";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const novoColaborador = {
        nome: nomeColaborador,
        cargo,
        img,
        time
      };

      adicionarColaborador(novoColaborador);
      setNomeColaborador('');
      setCargo('');
      setImg('');
      setTime('');
    } else if (nomeFormulario === "time") {
      if (!nomeTime || nomeTime.length < 6) {
        newErrors.nomeTime = "O nome é obrigatório e tem que ter mais de 6 caracteres!";
      }
      if (!corTime) {
        newErrors.corTime = "A cor é obrigatória!";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const novoTime = {
        nome: nomeTime,
        cor: corTime
      };

      adicionarTime(novoTime);
      setNomeTime('');
      setCorTime('');
    }

    setErrors({});
    document.querySelectorAll("input").forEach(input => input.value = '');
    document.querySelectorAll("select").forEach(select => select.value = '');
  };

  return (
    <SectionEstilizado nomeformulario={nomeFormulario}>
      <h2>Preencha os dados para criar um novo {nomeFormulario}.</h2>

      <form onSubmit={onSubmit}>
        {nomeFormulario === "colaborador" ? (
          <>
            <CampoFormulario
              nomeCampo="Nome"
              tipoInput="text"
              placeholder="Digite o seu nome"
              obrigatorio={true}
              onChange={(e) => setNomeColaborador(e.target.value)}
              className={errors.nomeColaborador ? 'error' : ''}
              erro={errors.nomeColaborador}
            />

            <CampoFormulario
              nomeCampo="Cargo"
              tipoInput="text"
              placeholder="Digite o seu cargo"
              obrigatorio={true}
              onChange={(e) => setCargo(e.target.value)}
              className={errors.cargo ? 'error' : ''}
              erro={errors.cargo}
            />

            <CampoFormulario
              nomeCampo="Imagem"
              tipoInput="url"
              placeholder="Informe o endereço da imagem"
              obrigatorio={true}
              onChange={(e) => setImg(e.target.value)}
              className={errors.img ? 'error' : ''}
              erro={errors.img}
            />

            <ListaSuspensa
              nome="Time"
              obrigatorio={true}
              onChange={(e) => setTime(e.target.value)}
              className={errors.time ? 'error' : ''}
              erro={errors.time}
              value={time}
            />
          </>
        ) : nomeFormulario === "time" ? (
          <>
            <CampoFormulario
              nomeCampo="Nome"
              tipoInput="text"
              placeholder="Digite o nome do time"
              obrigatorio={true}
              onChange={(e) => setNomeTime(e.target.value)}
              className={errors.nomeTime ? 'error' : ''}
              erro={errors.nomeTime}
            />

            <CampoFormulario
              nomeCampo="Cor"
              tipoInput="color"
              obrigatorio={true}
              onChange={(e) => setCorTime(e.target.value)}
              className={errors.corTime ? 'error' : ''}
              erro={errors.corTime}
            />
          </>
        ) : null}

        <button>Criar Card</button>
      </form>
    </SectionEstilizado>
  );
};

Formulario.propTypes = {
  nomeFormulario: PropTypes.string.isRequired,
};

export default Formulario;