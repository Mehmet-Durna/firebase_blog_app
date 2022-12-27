
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";


function AuthForm({handleChange, handleSubmit,info}) {


    const {signUpProvider} = useContext(AuthContext);

    return (
        <div className="container d-grid justify-content-center ">
            <form className="mb-3" onSubmit={handleSubmit}>

                { info.firstName && <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                        First Name
                    </label>
                    <input name="firstName" onChange={handleChange} type="text" className="form-control"
                           placeholder="Enter your first name.."/>
                </div>}


                {info.lastName && <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        Last Name
                    </label>
                    <input name="lastName" onChange={handleChange} type="text" className="form-control"
                           placeholder="Enter your last name.."/>
                </div>}

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
                        <input name="password" onChange={handleChange} type="password" className="form-control" placeholder="Enter your password.."/>
                    </div>
                {!info.firstName&& <div className="mb-3"><a className="text-decoration-none" href="#">Forget Password</a></div>}
                    <button type="submit" className="btn btn-primary form-control "> {info.firstName ? "Register" : "Login"} </button>
            </form>
            {!info.firstName && <button onClick={() => signUpProvider()} className={"btn btn-primary form-control  mt-2 "}>Continue
                with Google </button>}
        </div>
    );
}

export default AuthForm;