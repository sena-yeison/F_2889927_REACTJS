import React from "react";
import { Navigate } from "react-router-dom";


const RouterPrivate = (canLogin) =>{

    console.log(canLogin)
    if(canLogin){
        return <Navigate to="/dasboard" replace={true}/>
    }else{
        return <Navigate to="/login" replace={true}/>

    }
}


export default RouterPrivate;