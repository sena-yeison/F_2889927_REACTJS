import FormClient from "./components/clients/form-clients";
import Users from "./components/users/users";
import ListClient from "./components/clients/list-clients";
import { useContext, useState } from "react";
import Suppliers from "./components/suppliers/suppliers";
import MainCicloDeVida from "./components/CicloDeVida/main";
import { Hijo } from "./components/context/hijo";
import React from "react";

// Creamos el conexto

export const userContext = React.createContext();

function App() {
  // const [listClients, setListClients] = useState([])
  // const onHandleCient = (client)=>{
  //   setListClients([...listClients, client]);
  //   console.log(client)
  // }
  const [user, setUser] = useState(null);

  const login = ()=>{
    if(user){
      setUser(null)
    }else{
      setUser({
        nombre:"Laura Catalina",
        apellidos:"Garcia Angel",
        email: "laura.catalina@gmail.com"
      })
    }
  }

  return (
    <>
    <userContext.Provider value={user}>
      
      <button onClick={login}>Login</button>
      <div className="container">
        {/* <Users/> */}
        {/* <Suppliers/> */}
        {/* <FormClient onHandleCient={onHandleCient}/> */}
        {/* <ListClient clients={listClients} /> */}
        {/* <MainCicloDeVida/> */}

        <Hijo />
      </div>
      
    </userContext.Provider>
    </>
  );
}

export default App;
