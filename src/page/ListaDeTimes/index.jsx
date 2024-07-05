import { useState } from "react";
import styled from "styled-components";
import useTimesContext from "../../contexto/useTimesContext";
import FormularioEditar from "../../componentes/FormularioEditar";

const SectionEstilizado = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  width: 100%;
  height: 100%;
`;

const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TableHead = styled.thead`
  background-color: #4CAF50;
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
`;

const DeleteButton = styled(EditButton)`
  background-color: #dc3545;

  &:hover {
    background-color: #bd2130;
  }
`;

const ListaDeTimes = () => {
  const { times, excluirTime } = useTimesContext();
  const [timeSelecionado, setTimeSelecionado] = useState(null);

  return (
    <SectionEstilizado>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Id</TableHeader>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Cor</TableHeader>
            <TableHeader>Ações</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {times.map((time) => (
            <TableRow key={time.id}>
              <TableData>{time.id}</TableData>
              <TableData>{time.nome}</TableData>
              <TableData>{time.cor}</TableData>
              <TableData>
                <ButtonWrapper>
                  <EditButton onClick={() => setTimeSelecionado(time)}>Editar</EditButton>
                  <DeleteButton onClick={() => excluirTime(time.id)}>Excluir</DeleteButton>
                </ButtonWrapper>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {timeSelecionado && (
        <FormularioEditar time={timeSelecionado} onClose={() => setTimeSelecionado(null)} />
      )}
    </SectionEstilizado>
  );
};

export default ListaDeTimes;