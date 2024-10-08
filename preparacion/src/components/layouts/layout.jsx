import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HomeRouters from "../../routes/home.routes";
import Contacts from "../pages/contacts";
import Services from "../pages/services";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Error404 from "../pages/404";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import RouterPrivate from "../utils/routerPrivate";
import { UseLoginContext } from "../context/userLoginContext";

const Header = () =>{

    const {userLogin} = useContext(UseLoginContext);

    return( 
        <Routes>
            <Route path="/" element={<HomeRouters/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route element={<RouterPrivate canLogin={userLogin?true:false}/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>
            </Route>
        </Routes>

    )

}

export default Header;