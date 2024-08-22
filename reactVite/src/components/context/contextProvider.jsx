import React, { Children, createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const ToggleUserContext = createContext();

export const useUsersContext = () => {
  return useContext(UserContext);
};

export const useToggleUsersContext = () => {
  return useContext(ToggleUserContext);
};

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState();

  const handleAcces = () => {
    if (users) {
      setUsers(null);
    } else {
      setUsers({
        nombre: "Juan Camilo",
        apellidos: "Pacheco"
      });
    }
  };
  return (
    <UserContext.Provider value={users}>
      <ToggleUserContext.Provider value={handleAcces}>
        {children}
      </ToggleUserContext.Provider>
    </UserContext.Provider>
  );
};

export default ContextProvider;
