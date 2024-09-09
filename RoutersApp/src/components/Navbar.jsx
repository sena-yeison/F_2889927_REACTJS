import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () =>{

    return(
        <>
        <header>
            <img src="https://static.vecteezy.com/system/resources/previews/012/986/755/non_2x/abstract-circle-logo-icon-free-png.png" className="img-fluid" alt="" />
            <nav>
                <Link className="fuenteLink" to="/register">Registro</Link>
                <Link  className="fuenteLink"  to="/login">Login</Link>
            </nav>

            <div>
                <span>Nombre Usuario</span>
                <button>Salir</button>
            </div>
        </header>
        
        <Outlet/>
        </>
        
    )
}

export default Navbar;
