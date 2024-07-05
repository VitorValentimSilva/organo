import { Navigate } from 'react-router-dom';
import useLoginContext from "../../contexto/useLoginContext";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useLoginContext();
  
  return isAuthenticated ? element : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;