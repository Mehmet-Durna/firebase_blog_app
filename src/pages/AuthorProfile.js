import ProfileCard from "../components/ProfileCard";
import Posts from "../components/Posts";
import React, {useContext} from "react";
import {PostContext} from "../context/PostContext";
import {useLocation} from "react-router-dom";


function AuthorProfile() {

    const location=useLocation()
    const user=location.state.user;
    const {postLists} = useContext(PostContext);



    return (

        <div className="container">
            <div className="row gutters-sm" >
                <div className="mb-3">
                    <ProfileCard user={user}/>
                </div>
                <div className="mb-3">
                    <h1 className="text-center text-success">{user.displayName}'s Blogs</h1>
                    <Posts posts={postLists?.filter((post)=>
                        post.author.uid === user.uid
                    )}/>
                </div>

            </div>
        </div>

    );
}

export default AuthorProfile;