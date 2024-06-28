import PropTypes from 'prop-types';
import useTimesContext from "../../contexto/useTimesContext";

const ListaSuspensa = ({ nome }) => {
  const { times } = useTimesContext();

  return(
    <>
      <label htmlFor={"i" + nome}>{nome}</label>
      <select id={"i" + nome}>
        <option value="0">--Selecione um {nome}--</option>
        {times.map(time => <option key={time.id}>{time.nome}</option>)}
      </select>
    </>
    
  )
}

ListaSuspensa.propTypes = {
  nome: PropTypes.string.isRequired
};

export default ListaSuspensa