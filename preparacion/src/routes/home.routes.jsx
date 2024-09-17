import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UseLoginContext } from "../components/context/userLoginContext";

const HomeRouters = () =>{

  const {onLoginAccess, userLogin, isLogin, onLogOut} = useContext(UseLoginContext);


    return(
        <>
        <div className="containerHeader">
            <nav>
                <ul>
                    <Link className="li" to="/" >Inicio</Link>
                    <Link className="li" to="/services">Servicios</Link>
                    <Link className="li" to="/contacts">Contactos</Link>
                    {!isLogin && <Link  className="li" to="/login">Acceder</Link> }
                    {!isLogin && <Link className="li" to="/register">Registrarse</Link> }
                    {isLogin && <Link className="li" to="/dashboard">Dashboard</Link> }
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
    )
    
}


export default HomeRouters;