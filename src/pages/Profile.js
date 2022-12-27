import ProfileCard from "../components/ProfileCard";
import Posts from "../components/Posts";
import React, {useContext} from "react";
import {PostContext} from "../context/PostContext";
import {AuthContext} from "../context/AuthContext";

function Profile() {

    const {postLists} = useContext(PostContext);
    const {currentUser} = useContext(AuthContext);

    return (

        <div className="container">
          <div className="row gutters-sm" >
            <div className="mb-3">
                <ProfileCard user={currentUser}/>
            </div>
              <div className="mb-3">
                  <h1 className="text-center text-success">{currentUser.displayName}'s Blogs</h1>
                  <Posts posts={postLists?.filter((post)=>
                      post.author.id === currentUser.uid
                  )}/>
              </div>

        </div>
    </div>

    );
}

export default Profile;