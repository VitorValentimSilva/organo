import PropTypes from 'prop-types';

const CampoFormulario = ({ nomeCampo, tipoInput, placeholder, obrigatorio, onChange, className, erro }) => {
  return (
    <>
      <label htmlFor={"i" + nomeCampo}>{nomeCampo}</label>
      <input 
        type={tipoInput} 
        name={nomeCampo} 
        id={"i" + nomeCampo} 
        placeholder={erro || placeholder} 
        required={obrigatorio}
        onChange={onChange}
        className={className}
      />
    </>
  )
}

CampoFormulario.propTypes = {
  nomeCampo: PropTypes.string.isRequired,
  tipoInput: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  obrigatorio: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  erro: PropTypes.string
};

export default CampoFormulario