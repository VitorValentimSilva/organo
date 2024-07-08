import styled from "styled-components";
import PropTypes from 'prop-types';
import CampoFormulario from "../CampoFormulario";
import ListaSuspensa from "../ListaSuspensa";
import { useState } from "react";
import useTimesContext from "../../contexto/useTimesContext";
import useColaboradoresContext from "../../contexto/useColaboradoresContext";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 16px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;

  label {
    font-size: 19px;
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }

  select{
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    background-color: white;
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
    
    &:focus {
      border-color: #007bff;
      outline: none;
    }

    option {
      padding: 10px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #bd2130;
  }
`;

const FormularioEditar = ({ item, onClose, nomeTabela }) => {
  const { editarTime } = useTimesContext();
  const { editarColaborador } = useColaboradoresContext();
  const [formValues, setFormValues] = useState({
    Nome: item.nome,
    Cor: item.cor || "",
    Cargo: item.cargo || "",
    Img: item.img || "",
    Time: item.time || ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
    const newErrors = {};

    if (!formValues.Nome) newErrors.nome = "O nome é obrigatório!";
    if (nomeTabela === "times" && !formValues.Cor) newErrors.cor = "A cor é obrigatória!";
    if (nomeTabela === "colaboradores" && !formValues.Cargo) newErrors.cargo = "O cargo é obrigatório!";
    if (nomeTabela === "colaboradores" && !formValues.Img) newErrors.img = "A imagem é obrigatória!";
    if (nomeTabela === "colaboradores" && !formValues.Time) newErrors.time = "O time é obrigatório!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (nomeTabela === "times") {
      const timeAtualizado = {
        id: item.id,
        nome: formValues.Nome,
        cor: formValues.Cor
      };
      editarTime(timeAtualizado);
    } else if (nomeTabela === "colaboradores") {
      const colaboradorAtualizado = {
        id: item.id,
        nome: formValues.Nome,
        cargo: formValues.Cargo,
        img: formValues.Img,
        time: formValues.Time
      };
      editarColaborador(colaboradorAtualizado);
    }

    onClose();
  };

  return (
    <Overlay>
      <FormContainer>
        <Form onSubmit={onSubmit}>
          <FormTitle>{nomeTabela === "times" ? "Editar Time" : "Editar Colaborador"}</FormTitle>
          <FormGroup>
            <CampoFormulario 
              nomeCampo="Nome"
              tipoInput="text"
              obrigatorio={true}
              onChange={handleChange}
              erro={errors.nome}
              value={formValues.Nome}
            />
          </FormGroup>
          {nomeTabela === "times" && (
            <FormGroup>
              <CampoFormulario 
                nomeCampo="Cor"
                tipoInput="text"
                obrigatorio={true}
                onChange={handleChange}
                erro={errors.cor}
                value={formValues.Cor}
              />
            </FormGroup>
          )}
          {nomeTabela === "colaboradores" && (
            <>
              <FormGroup>
                <CampoFormulario 
                  nomeCampo="Cargo"
                  tipoInput="text"
                  obrigatorio={true}
                  onChange={handleChange}
                  erro={errors.cargo}
                  value={formValues.Cargo}
                />
              </FormGroup>
              <FormGroup>
                <CampoFormulario 
                  nomeCampo="Imagem"
                  tipoInput="text"
                  obrigatorio={true}
                  onChange={handleChange}
                  erro={errors.img}
                  value={formValues.Img}
                />
              </FormGroup>
              <FormGroup>
                <ListaSuspensa 
                  nome="Time"
                  obrigatorio={true}
                  onChange={(e) => setFormValues({ ...formValues, Time: e.target.value })}
                  erro={errors.time}
                  value={formValues.Time}
                />
              </FormGroup>
            </>
          )}
          <ButtonGroup>
            <Button type="submit">Salvar</Button>
            <CancelButton type="button" onClick={onClose}>Cancelar</CancelButton>
          </ButtonGroup>
        </Form>
      </FormContainer>
    </Overlay>
  );
};

FormularioEditar.propTypes = {
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  nomeTabela: PropTypes.string.isRequired
};

export default FormularioEditar;