import { useState } from "react";
import styled from "styled-components";
import useTimesContext from "../../contexto/useTimesContext";
import useColaboradoresContext from "../../contexto/useColaboradoresContext";
import FormularioEditar from "../../componentes/FormularioEditar";
import PropTypes from "prop-types";

const SectionEstilizado = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  width: 100%;
  height: 100%;

  @media (max-width: 830px) {
    padding: 0;
  }
`;

const Table = styled.table`
  width: 94%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

const TableHead = styled.thead`
  background-color: #4caf50;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 20px;
`;

const TableData = styled.td`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 17px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    justify-content: center;
    padding: 8px 0;
  }
`;

const EditButton = styled.button`
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

  @media (max-width: 600px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

const DeleteButton = styled(EditButton)`
  background-color: #dc3545;

  &:hover {
    background-color: #bd2130;
  }
`;

const Tabela = ({ nomeTabela }) => {
  const { times, excluirTime } = useTimesContext();
  const { colaboradores, excluirColaborador } = useColaboradoresContext();
  const [itemSelecionado, setItemSelecionado] = useState(null);

  return (
    <SectionEstilizado>
      <Table>
        {nomeTabela === "times" ? (
          <TableHead>
            <TableRow>
              <TableHeader>Id</TableHeader>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Cor</TableHeader>
              <TableHeader>Ações</TableHeader>
            </TableRow>
          </TableHead>
        ) : nomeTabela === "colaboradores" ? (
          <TableHead>
            <TableRow>
              <TableHeader>Id</TableHeader>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Cargo</TableHeader>
              <TableHeader>Imagem</TableHeader>
              <TableHeader>Time</TableHeader>
              <TableHeader>Ações</TableHeader>
            </TableRow>
          </TableHead>
        ) : null}
        <tbody>
          {nomeTabela === "times" &&
            times.map((time) => (
              <TableRow key={time.id}>
                <TableData>{time.id}</TableData>
                <TableData>{time.nome}</TableData>
                <TableData>{time.cor}</TableData>
                <TableData>
                  <ButtonWrapper>
                    <EditButton onClick={() => setItemSelecionado(time)}>
                      Editar
                    </EditButton>
                    <DeleteButton onClick={() => excluirTime(time.id)}>
                      Excluir
                    </DeleteButton>
                  </ButtonWrapper>
                </TableData>
              </TableRow>
            ))}

          {nomeTabela === "colaboradores" &&
            colaboradores.map((colaborador) => (
              <TableRow key={colaborador.id}>
                <TableData>{colaborador.id}</TableData>
                <TableData>{colaborador.nome}</TableData>
                <TableData>{colaborador.cargo}</TableData>
                <TableData>{colaborador.img}</TableData>
                <TableData>{colaborador.time}</TableData>
                <TableData>
                  <ButtonWrapper>
                    <EditButton onClick={() => setItemSelecionado(colaborador)}>
                      Editar
                    </EditButton>
                    <DeleteButton
                      onClick={() => excluirColaborador(colaborador.id)}
                    >
                      Excluir
                    </DeleteButton>
                  </ButtonWrapper>
                </TableData>
              </TableRow>
            ))}
        </tbody>
      </Table>

      {itemSelecionado && (
        <FormularioEditar
          item={itemSelecionado}
          onClose={() => setItemSelecionado(null)}
          nomeTabela={nomeTabela}
        />
      )}
    </SectionEstilizado>
  );
};

Tabela.propTypes = {
  nomeTabela: PropTypes.string.isRequired,
};

export default Tabela;