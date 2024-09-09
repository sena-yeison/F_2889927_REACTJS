import React from "react";

const Login = () =>{
    return (
    <>
    
    <div className="container-fuid d-flex justify-content-center aling-item-center ">
        <div className="card">
            <div className="card-body text-center">
                <h2>Incio de sesion</h2>
                <hr />
                <form action="">
                    <div className="">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="">
                       <button className="btn btn-primary">Acceder</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}

export default Login;