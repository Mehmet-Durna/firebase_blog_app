import React, {useContext, useState} from 'react';

import {useNavigate} from "react-router-dom";
import AuthForm from "../components/AuthForm";
import {AuthContext} from "../context/AuthContext";

function Register() {

    const navigate = useNavigate();
    const {createUser} = useContext(AuthContext);

    const [info,setInfo]=useState({
        firstName:" ",
        lastName:" ",
        email:" ",
        password:" ",
    });

    const {firstName, lastName, email, password}=info;

    const handleSubmit = (e)=>{
        e.preventDefault();
        const displayName=`${firstName} ${lastName}`
        createUser(email,password,navigate,displayName)

    }
    const handleChange = (e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }

    return (
      <AuthForm handleChange={handleChange} handleSubmit={handleSubmit} info={info}/>
    );
}

export default Register;