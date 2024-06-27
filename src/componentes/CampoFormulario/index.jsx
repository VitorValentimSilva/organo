import PropTypes from 'prop-types';

const CampoFormulario = ({ nomeCampo, tipoInput, placeholder, obrigatorio }) => {
  return(
    <>
      <label htmlFor={"i" + nomeCampo}>{nomeCampo}</label>
      <input 
        type={tipoInput} 
        name={nomeCampo} 
        id={"i" + nomeCampo} 
        placeholder={placeholder} 
        required={obrigatorio}
      />
    </>
    
  )
}

CampoFormulario.propTypes = {
  nomeCampo: PropTypes.string.isRequired,
  tipoInput: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  obrigatorio: PropTypes.bool
};

export default CampoFormulario