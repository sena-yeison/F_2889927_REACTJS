import React from "react";
import useHookAcces from "../../../hooks/hooksAcces";
import { useNavigate } from "react-router-dom";




const Register = () => {
  
  const navigate = useNavigate();

  const { name, email, password, onInputChange, onResetForm } = useHookAcces({
    name: "",
    email: "",
    password: ""
  });


  const onRegister = (e) =>{
    e.preventDefault();
    navigate('/login',{
      replace:true
  })
    onResetForm();
  }



  return (
    <>
      <div className="conteiner  d-flex justify-content-center align-items-center mt-5">
        <div className="card col-4">
          <div className="card-body  d-flex flex-column justify-content-centera align-items-center">
            <img src="https://static.vecteezy.com/system/resources/previews/024/553/534/non_2x/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png" className="image-fluid " alt="" />
            <h3>Registro de usuario en SARA</h3>
            <form className="col-12" onSubmit={onRegister}>
              <div className="col-12 w-100 ">
                <label htmlFor="" className="label-control">Nombre completo</label>
                <input 
                  type="text"
                  className="form-control col-12"
                  required autoComplete="off"
                  name="name"
                  id="name"
                  value={name}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="" className="label-control">Email</label>
                <input 
                  type="email" 
                  className="form-control col-12"  
                  name="email"
                  id="email"
                  value={email}
                  onChange={onInputChange} 
                  required 
                  autoComplete="off" 
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
                  onChange={onInputChange}  
                  required 
                  autoComplete="off" 
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

export default Register; 