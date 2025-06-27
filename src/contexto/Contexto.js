import React from "react";

const Context = React.createContext();

const ContextoProvider = ({ children }) => {
  return <Context.Provider value={true}>{true && children}</Context.Provider>;
};

export default ContextoProvider;
