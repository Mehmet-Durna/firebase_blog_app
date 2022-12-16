import React, {useState} from 'react';
import {signIn, signUpProvider} from "../auth/firebase";
import {useNavigate} from "react-router-dom";

function Login() {

    // const [email,setEmail]=useState()
    // const [password,setPassword]=useState()

    const [info,setInfo]=useState({

        email:"",
        password:"",
    });
    const { email, password}=info;
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        signIn(email,password,navigate)
        console.log(email,password)
    }
    const handleChange = (e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="form-image d-none d-md-block">

            </div>
            <div className="register-form">
                <h1 className="form-title display-3"> Login</h1>
                <form id="register" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input required name="email" onChange={handleChange} type="text" className="form-control" placeholder="Enter your email.."/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input required name="password" onChange={handleChange} type="text" className="form-control" placeholder="Enter your password.."/>
                    </div>
                    <a className="link" onClick={null}>Forget Password</a>
                    <button type="submit" className="btn btn-primary form-control mt-2"> Login </button>
                </form>
                <button onClick={()=>signUpProvider(navigate)} className={"btn btn-primary form-control mt-2"}>Continue with Google </button>
            </div>
        </div>
    );
}

export default Login;