import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";

function Profile() {

    const {currentUser} = useContext(AuthContext);

    console.log(currentUser);
    return (
        <div className="container">


        <div>Profile Page</div>

        <h1>
            {currentUser?.displayName}
        </h1>
        </div>
    );
}

export default Profile;