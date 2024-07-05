import styled from "styled-components";
import PropTypes from 'prop-types';
import CampoFormulario from "../CampoFormulario";
import { useState } from "react";
import useTimesContext from "../../contexto/useTimesContext";

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

  label{
    font-size: 19px;
    margin-bottom: 8px;
  }

  input{
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
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

const FormularioEditar = ({ item, onClose }) => {
  const [nome, setNome] = useState(item.nome);
  const [cor, setCor] = useState(item.cor);
  const [errors, setErrors] = useState({});
  const { editarTime } = useTimesContext();

  const onSubmit = (event) => {
    event.preventDefault();
    
    const newErrors = {};
    
    if(!nome) { newErrors.nome = "O nome é obrigatório!" }
    if(!cor) { newErrors.cor = "A cor é obrigatória!" }

    if(Object.keys(newErrors).length > 0){
      setErrors(newErrors);
      return;
    }

    const timeAtualizado = {
      id: item.id,
      nome,
      cor
    }

    editarTime(timeAtualizado)
    onClose()
  };

  return (
    <Overlay>
      <FormContainer>
        <Form onSubmit={onSubmit}>
          <FormTitle>Editar Time</FormTitle>
          <FormGroup>
            <CampoFormulario 
              nomeCampo="Nome"
              tipoInput="text"
              obrigatorio={true}
              onChange={(e) => setNome(e.target.value)}
              erro={errors.nome}
              value={item.nome}
            />
          </FormGroup>
          <FormGroup>
            <CampoFormulario 
              nomeCampo="Cor"
              tipoInput="text"
              obrigatorio={true}
              onChange={(e) => setCor(e.target.value)}
              erro={errors.cor}
              value={item.cor}
            />
          </FormGroup>
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
  onClose: PropTypes.func.isRequired
};

export default FormularioEditar;