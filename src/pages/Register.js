import React, {useState} from 'react';
import {createUser} from "../auth/firebase";
import {useNavigate} from "react-router-dom";
import AuthForm from "../components/AuthForm";

function Register() {

    const navigate = useNavigate();


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