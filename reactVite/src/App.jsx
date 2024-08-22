import FormClient from "./components/clients/form-clients";
import Users from "./components/users/users";
import ListClient from "./components/clients/list-clients";
import Suppliers from "./components/suppliers/suppliers";
import MainCicloDeVida from "./components/CicloDeVida/main";
import React, { createContext, useState } from "react";
import Providers from "./components/context/Providers";
import ContextProvider from "./components/context/contextProvider";

// Creamos el conexto

function App() {
  // const [listClients, setListClients] = useState([]);
  // const onHandleCient = (client) => {
  //   setListClients([...listClients, client]);
  //   console.log(client);
  // };

  return (
    <>
      <ContextProvider>
        <div className="container">
          <Users />
          <Suppliers />
          {/* <FormClient onHandleCient={onHandleCient} /> */}
          {/* <ListClient clients={listClients} /> */}
          {/* <MainCicloDeVida /> */}
        </div>
      </ContextProvider>
    </>
  );
}

export default App;
