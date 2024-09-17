import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardRouters from "../../routes/dashboard.routes";
import { UseLoginContext } from "../context/userLoginContext";

const DashboardLayout = () => {

  const {userLogin, isLogin, onLogOut} = useContext(UseLoginContext);


  return (
    <>
   <div className="container">
            <nav>
                <ul>
                    <Link className="li" to="/dashboard">Dashboard</Link> 
                    <Link className="li" to="/homeApp">Inicio</Link> 
                </ul>

                {isLogin ? (
                     <div >
                     <span>{userLogin.name}</span>
                     <button onClick={onLogOut}>Salir</button>
                 </div>
                ) : ''}
               
            </nav>
        </div>

        <Outlet/>
    </>
  );
};

export default DashboardLayout;
