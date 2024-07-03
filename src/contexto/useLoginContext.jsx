import { useContext } from 'react';
import {LoginContext} from './Contextos';

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default useLoginContext;