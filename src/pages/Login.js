import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import AuthForm from "../components/AuthForm";

import {AuthContext} from "../context/AuthContext";

function Login() {


    const {signIn} = useContext(AuthContext);
    const [info,setInfo]=useState({
        email:" ",
        password:" ",
    });
    const { email, password}=info;
    const navigate = useNavigate();




    const handleSubmit = (e)=>{

        e.preventDefault();
        signIn(email,password,navigate)

    }
    const handleChange = (e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }

    return (


     <AuthForm handleChange={handleChange} handleSubmit={handleSubmit} info={info}/>



    );
}

export default Login;