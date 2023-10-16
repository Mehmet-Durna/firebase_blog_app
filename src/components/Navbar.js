import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";



function Navbar() {
    const navigate = useNavigate();
    const {currentUser,logOut} = useContext(AuthContext);

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

                                        <img
                                            src={currentUser.photoURL ? currentUser.photoURL : ''}
                                            alt="User Profile"
                                            className="rounded-circle dropdown-toggle btn navbar-image"
                                            id="dropdownMenuButton"
                                            data-bs-toggle="dropdown"
                                            referrerPolicy="no-referrer"
                                        />


                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <button
                                                className="dropdown-item"
                                                onClick={() => navigate("/profile")}
                                                style={{ border: 'none', background: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                                            >
                                                Profile
                                            </button>
                                            <button className="dropdown-item" onClick={() => navigate("/create-post")}>Create Post</button>
                                            <button className="dropdown-item" onClick={() => logOut()}>Logout</button>

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
