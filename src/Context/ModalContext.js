import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState({});

  console.log(modal);

  return (
    <ModalContext.Provider value={{ setModal, modal }}>
      {children}
    </ModalContext.Provider>
  );
};