import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {logOut} from "../auth/firebase";
import {AuthContext} from "../context/AuthContext";
import { CgProfile } from "react-icons/cg";



function Navbar() {
    const navigate = useNavigate();
    const {currentUser} = useContext(AuthContext);
const photo="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png";
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container bg-info">
                    <Link to="/" className=" text-white" >
                        <h4> React Blog App</h4>
                    </Link>
                    <div className='d-flex text-white align-items-center '>

                        {currentUser ? (
                                <>

                                    <div className="dropdown text-center">

                                        <img src={currentUser.photoURL? currentUser.photoURL:photo} alt="Profile Image" className="rounded-circle dropdown-toggle btn navbar-image " id="dropdownMenuButton"
                                             data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                             referrerPolicy="no-referrer"/>

                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item " href="#" onClick={()=> navigate("/profile")}>Profile</a>
                                            <a className="dropdown-item"  href="#" onClick={()=> navigate("/create-post")}>Create Post</a>
                                            <a className="dropdown-item " href="#" onClick={()=> logOut()}>Logout</a>

                                        </div>
                                    </div>

                                    <h5 className="mb-0 text-capitalize">
                                        {currentUser?.displayName}
                                    </h5>

                                </>
                            ) : (
                                <>
                                    <button onClick={()=> navigate("/login")} className="ms-2 btn btn-outline-light">Login</button>
                                    <button onClick={()=> navigate("/register")} className="ms-2 btn btn-outline-light">Register</button>
                                </>
                            )}

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;