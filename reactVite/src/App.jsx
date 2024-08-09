import FormClient from "./components/clients/form-clients"
import Users from "./components/users/users"
import ListClient from "./components/clients/list-clients";
import { useState } from "react";
import Suppliers from "./components/suppliers/suppliers";
import MainCicloDeVida from "./components/CicloDeVida/main";

function App() {

  const [listClients, setListClients] = useState([])
  const onHandleCient = (client)=>{
    setListClients([...listClients, client]);
    console.log(client)
  }

  
  
  return (
    <div className="container">
      {/* <Users/> */}
      {/* <Suppliers/> */}
      {/* <FormClient onHandleCient={onHandleCient}/> */}
      {/* <ListClient clients={listClients} /> */}
      <MainCicloDeVida/>
    </div>
  )
}



export default App
