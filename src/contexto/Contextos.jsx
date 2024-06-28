import { createContext } from 'react';

const TimesContext = createContext();
TimesContext.displayName = "Times";

const ColaboradoresContext = createContext();
ColaboradoresContext.displayName = "Colaboradores";

export { TimesContext, ColaboradoresContext };