import PropTypes from 'prop-types';

const Colaboradores = ({ img, nome, cargo }) => {
  return(
    <div className="divColaborador">
      <img src={img} alt="Imagem do colaborador"/>

      <div>
        <h4>{nome}</h4>

        <p>{cargo}</p>
      </div>
    </div>    
  )
}

Colaboradores.propTypes = {
  img: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
};

export default Colaboradores