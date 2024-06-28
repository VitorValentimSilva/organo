import { useContext } from 'react';
import ColaboradoresContext from './ColaboradoresContext';

export const useColaboradoresContext = () => {
  return useContext(ColaboradoresContext);
};

export default useColaboradoresContext;