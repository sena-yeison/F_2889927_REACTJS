import React from "react";


const Login = () => {
  return (
    <>
      <div className="conteiner  d-flex justify-content-center align-items-center mt-5">
        <div className="card col-4">
          <div className="card-body d-flex flex-column justify-content-centera align-items-center">
            <img src="https://static.vecteezy.com/system/resources/previews/024/553/534/non_2x/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png" className="image-fluid " alt="" />
            <h3>SARA</h3>
            <form className="col-12">
              <div className="col-12">
                <label htmlFor="" className="label-control">Email</label>
                <input type="email" className="form-control col-12" name="email" required autoComplete="off" />
              </div>
              <div className="col-12">
                <label htmlFor="" className="label-control">Password</label>
                <input type="password" className="form-control col-12" name="password" required autoComplete="off" />
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