import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";

function ProfileCard() {

    const {currentUser} = useContext(AuthContext);



    console.log(currentUser)
    return (
        <div className="card " >
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <img src={currentUser?.photoURL} alt="Profile Image"
                         className="rounded-circle"  referrerPolicy="no-referrer"/>
                    <div className="mt-3">
                        <h4>{currentUser.displayName}</h4>
                        <p className="text-secondary mb-1">{currentUser.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;