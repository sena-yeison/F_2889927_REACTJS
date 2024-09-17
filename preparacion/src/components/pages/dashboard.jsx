import React, { useContext } from "react";
import { UseLoginContext } from "../context/userLoginContext";


const Dashboard = () => {

  const {userLogin} = useContext(UseLoginContext);

 

    return (
      <>
       <p>Dashboard {userLogin.name}</p>
      </>
    );
  };
  
  export default Dashboard; 