import React, { useContext, useState } from "react";
import useHookAcces from "../../../hooks/hooksAcces";
import { json, useNavigate } from 'react-router-dom'
import { UseLoginContext } from "../../context/userLoginContext";

const Login = () => {
  const navigate = useNavigate();

  // Obtener los datos del Local storage
  const userLoginStorage = JSON.parse(localStorage.getItem("user"));

  // Implementar el contexto
  const {onLoginAccess, userLogin, setUserlogin, onLogOut} = useContext(UseLoginContext);

  // Impementar el Hooks
  const { onInputChange, onResetForm } = useHookAcces();

  // Variables de accesos
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función del login 
  const onLogin = (e) =>{
    e.preventDefault();
    if(!userLoginStorage){
      alert("Lo sentimos! no existe en la base de datos")
    }else if(email == userLoginStorage.email && password == userLoginStorage.password){
      onLoginAccess(userLoginStorage)
      navigate('/dashboard',{
        replace:true
      }
    )
    }else{
      alert("Credenciales incorrectas")
    }
    onResetForm();
  }



  return (
    <>
      <div className="conteiner  d-flex justify-content-center align-items-center mt-5">
        <div className="card col-4">
          <div className="card-body d-flex flex-column justify-content-centera align-items-center">
            <img src="https://static.vecteezy.com/system/resources/previews/024/553/534/non_2x/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png" className="image-fluid " alt="" />
            <h3>SARA</h3>
            <form className="col-12" onSubmit={onLogin}>
              <div className="col-12">
                <label htmlFor="" className="label-control">Email</label>
                <input 
                  type="email" 
                  className="form-control col-12"  
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />              
              </div>
              <div className="col-12">
                <label htmlFor="" className="label-control">Password</label>
                <input 
                  type="password" 
                  className="form-control col-12" 
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}  
                  required 
                />
              </div>
              <div className="mt-3">
                <button className="btn btn-primary btn-sm col-12"> Acceder</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login; 