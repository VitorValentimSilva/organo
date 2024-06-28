import PropTypes from 'prop-types';
import useTimesContext from "../../contexto/useTimesContext";

const ListaSuspensa = ({ nome, obrigatorio, onChange, className, erro }) => {
  const { times } = useTimesContext();

  return (
    <>
      <label htmlFor={"i" + nome}>{nome}</label>
      <select 
        id={"i" + nome} 
        required={obrigatorio} 
        className={className} 
        onChange={onChange}
      >
        <option value="0">{erro || `--Selecione um ${nome}--`}</option>
        {times.map(time => <option key={time.id} value={time.nome}>{time.nome}</option>)}
      </select>
    </>
  );
}

ListaSuspensa.propTypes = {
  nome: PropTypes.string.isRequired,
  obrigatorio: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  erro: PropTypes.string
};

export default ListaSuspensa