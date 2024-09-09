import React from "react";
import { Route, Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="containerfluid col-12 vh100">
        <div className="row">
          <div className=" col-lg-2 border border-danger">
            <nav>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/contacts">Contactos</Link>
                </li>
                <li>
                  <Link to="/services">Servicios</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className=" col-lg-10 border border-success">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
