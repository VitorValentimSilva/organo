import { useContext } from 'react';
import {TimesContext} from './Contextos';

export const useTimesContext = () => {
  return useContext(TimesContext);
};

export default useTimesContext;