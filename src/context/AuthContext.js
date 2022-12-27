import {createContext, useEffect, useState} from "react";
import {auth} from "../auth/firebase";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut,
    updateProfile
} from "firebase/auth";
import {toast} from "react-toastify";


export const AuthContext = createContext();



function AuthContextProvider({children}) {

    const localUser=JSON.parse(localStorage.getItem('currentUser'));

    const [currentUser,setCurrentUser]=useState(localUser)



    useEffect(()=>{
        userObserver()
    },[currentUser])



     const createUser = async (email, password, navigate,displayName) => {
        try {
            let userCredential = await createUserWithEmailAndPassword(auth, email, password,displayName);
            console.log(userCredential);
            await updateProfile(auth.currentUser, {
                displayName: displayName
            })
            navigate("/")
        } catch (err) {
            alert(err.message);
        }
    };


    const signIn = async (email, password, navigate) => {
        try {
            let userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password)
            toast.success(`Welcome ${userCredential.user.displayName}`, {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate("/");
        } catch (err) {
            alert(err.message)
        }
    }

     const signUpProvider = async (navigate)=>{
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
            .then((result) => {
                toast.success(`Welcome ${auth.currentUser.displayName}`, {
                    position: toast.POSITION.TOP_RIGHT
                });
                navigate("/")

            }).catch((error) => {
                console.log(error)
            });
    }

     const logOut =()=>{
        signOut(auth).then((res) => {
            toast.error('Logged Out!', {
                position: toast.POSITION.TOP_RIGHT
            });
        })
            .catch((error) => {
            });
    }

     const userObserver = () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                localStorage.setItem("currentUser",JSON.stringify(user))
                setCurrentUser(user)
            } else {
                setCurrentUser(false)
            }
        });
    }


    return (
        <AuthContext.Provider value={{currentUser,createUser,signIn,signUpProvider,logOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;