import React, { useContext } from "react";
import { UseLoginContext } from "../context/userLoginContext";


const Dashboard = () => {

  const {onLoginAccess, userLogin, setUserlogin, onLogOut} = useContext(UseLoginContext);


    return (
      <>
       <p>Dashboard</p>
      </>
    );
  };
  
  export default Dashboard; 