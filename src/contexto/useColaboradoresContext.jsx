import { useContext } from 'react';
import {ColaboradoresContext} from './Contextos';

export const useColaboradoresContext = () => {
  return useContext(ColaboradoresContext);
};

export default useColaboradoresContext;