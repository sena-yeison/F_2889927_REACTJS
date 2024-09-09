import React from "react";
import { Link, Outlet } from "react-router-dom";

const HomeRouters = () =>{

    return(
        <>
        <div className="container">
            <nav>
                <ul>
                    <Link className="li" to="/" >Inicio</Link>
                    <Link className="li" to="/services">Servicios</Link>
                    <Link className="li" to="/contacts">Contactos</Link>
                    <Link className="li" to="/login">Acceder</Link>
                    <Link className="li" to="/register">Registrarse</Link>
                    <Link className="li" to="/dashboard">Dashboard</Link>


                </ul>

                <div>
                    <span>Nombre del Usuario Logueado</span>
                    <button>Salir</button>
                </div>
            </nav>
        </div>

        <Outlet/>
        </>
    )
    
}


export default HomeRouters;