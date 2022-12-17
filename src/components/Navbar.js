import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {logOut} from "../auth/firebase";
import {AuthContext} from "../context/AuthContext";
import {FaPen} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


function Navbar() {
    const navigate = useNavigate();

    const {currentUser} = useContext(AuthContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg justify-content-center">
                <div className="container bg-info">
                    <Link to="/" className=" text-white" >
                        <h4> React Blog App</h4>
                    </Link>
                    <div className='d-flex text-white align-items-center bg-danger'>



                        {currentUser ? (
                                <>
                                    <h5 className="mb-0 text-capitalize">
                                        {currentUser?.displayName}
                                    </h5>
                                    <button onClick={()=> logOut()} className="ms-2 btn btn-outline-light">Logout</button>
                                    <button onClick={()=> navigate("/create-post")} className="ms-2 btn btn-outline-light">Create Post</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={()=> navigate("/login")} className="ms-2 btn btn-outline-light">Login</button>
                                    <button onClick={()=> navigate("/register")} className="ms-2 btn btn-outline-light">Register</button>

                                </>
                            )}


                        <div className="dropdown">
                            <CgProfile className=" dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </CgProfile>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;