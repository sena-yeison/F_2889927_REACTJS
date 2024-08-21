import React, { useContext, useState } from "react";

const UserContext = React.createContext();
const ToggleUserContext = React.createContext();

export function useUserContext() {
  return useContext(UserContext);
}
export function useToggleUserContext() {
  return useContext(ToggleUserContext);
}

const Providers = ({ children }) => {
  const [user, setUser] = useState();

  const handleLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        nombre: "Dirley",
        apellido: "Contreras",
        email: "hola@mail.com"
      });
    }
  };

  return (
    <UserContext.Provider value={user}>
      <ToggleUserContext.Provider value={handleLogin}>
        {children}
      </ToggleUserContext.Provider>
    </UserContext.Provider>
  );
};

export default Providers;
