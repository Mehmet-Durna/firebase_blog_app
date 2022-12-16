import React, {useState} from 'react';
import {createUser} from "../auth/firebase";
import {useNavigate} from "react-router-dom";

function Register() {


    const [info,setInfo]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    });
    const navigate = useNavigate();
    const {firstName, lastName, email, password}=info;

    const handleSubmit = (e)=>{
        e.preventDefault();
        const displayName=`${firstName} ${lastName}`
        createUser(email,password,navigate,displayName)
        console.log(firstName)
    }
    const handleChange = (e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="form-image d-none d-md-block">
                <img/>
            </div>
            <div className="register-form">
                <h1 className="form-title display-3"> Register</h1>
                <form id="register" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            First Name
                        </label>
                        <input name="firstName" onChange={handleChange} type="text" className="form-control" placeholder="Enter your first name.."/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            Last Name
                        </label>
                        <input name="lastName" onChange={handleChange} type="text" className="form-control" placeholder="Enter your last name.."/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input  name="email" onChange={handleChange} type="text" className="form-control" placeholder="Enter your email.."/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input name="password" onChange={handleChange} type="text" className="form-control" placeholder="Enter your password.."/>
                    </div>
                    <button type="submit" className="btn btn-primary form-control"> Register </button>
                </form>
            </div>
        </div>
    );
}

export default Register;