import PropTypes from 'prop-types';
import useTimesContext from "../../contexto/useTimesContext";

const ListaSuspensa = ({ nome, obrigatorio }) => {
  const { times } = useTimesContext();

  return(
    <>
      <label htmlFor={"i" + nome}>{nome}</label>
      <select id={"i" + nome} required={obrigatorio}>
        <option value="0">--Selecione um {nome}--</option>
        {times.map(time => <option key={time.id} value={time.id}>{time.nome}</option>)}
      </select>
    </>
    
  )
}

ListaSuspensa.propTypes = {
  nome: PropTypes.string.isRequired,
  obrigatorio: PropTypes.bool
};

export default ListaSuspensa