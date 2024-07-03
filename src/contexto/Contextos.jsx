import { createContext } from 'react';

const TimesContext = createContext();
TimesContext.displayName = "Times";

const ColaboradoresContext = createContext();
ColaboradoresContext.displayName = "Colaboradores";

const LoginContext = createContext()
LoginContext.displayName = "Login"

export { TimesContext, ColaboradoresContext, LoginContext };