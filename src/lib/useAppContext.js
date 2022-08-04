import React, { useState } from "react";
import { createContext, useContext } from "react";

export const initialState = {
  menuIsOpen: false,
  languageMenuIsOpen: false,
  currentLang: "de",
  showFooter: false
};

const context = createContext(initialState);

export const Provider = ({ children }) => {
  const { Provider } = context;
  const [appState, setAppState] = useState(initialState);

  return <Provider value={{ appState, setAppState }}>{children}</Provider>;
};

const useAppContext = () => useContext(context);

export default useAppContext;
