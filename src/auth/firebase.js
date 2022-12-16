import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,signInWithPopup,updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const createUser = async (email, password, navigate,displayName) => {
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

export const signIn = async (email, password, navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password)
        console.log(userCredential);
        navigate("/");
    } catch (err) {
        alert(err.message)
    }
}

export const logOut =()=>{
signOut(auth).then((res) => {
    console.log(res)
})
    .catch((error) => {
    // An error happened.
});
}

export const userObserver = (setCurrentUser) =>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user)
        } else {
            setCurrentUser(false)
        }
    });
}

export const signUpProvider = (navigate)=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            navigate("/")

        }).catch((error) => {
        console.log(error)
    });
}