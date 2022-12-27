import React, {useState} from 'react';
import {signIn} from "../auth/firebase";
import {useNavigate} from "react-router-dom";
import AuthForm from "../components/AuthForm";
import {toast, ToastContainer} from "react-toastify";

function Login() {



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