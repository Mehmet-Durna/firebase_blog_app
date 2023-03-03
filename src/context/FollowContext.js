import React, {createContext, useEffect, useState} from 'react';
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../auth/firebase";





export const FollowContext = createContext();

function FollowContextProvider({children}) {

    const followsCollectionRef = collection(db, "follows");

    const [followList, setFollowList] = useState({
        userId:null,
        followList:[]
    });

    // By this hook we are getting collection of follows from data.
    useEffect(() => {
        onSnapshot(followsCollectionRef,(snapshot)=>{
            followList(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    }, []);















    return (
        <FollowContext.Provider value={{followList,setFollowList}}>
            {children}
        </FollowContext.Provider>
    );
}

export default FollowContext;