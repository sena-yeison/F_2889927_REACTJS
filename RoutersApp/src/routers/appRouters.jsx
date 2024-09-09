import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import Home from "../pages/Home";
import DashBoard from "../pages/Dashboard";
import { Error404 } from "../pages/error404";

const AppRouters = () =>{

    return (
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route path="/register" element={ <Register/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="/home" element={ <Home/> } />
                <Route path="/dashboard" element={ <DashBoard/> } />
                <Route path="*" element={ <Error404/> } />
            </Route>
        </Routes>
    )
}

export default AppRouters;
