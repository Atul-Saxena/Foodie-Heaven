import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"
import { getDatabase,set,ref } from "firebase/database"


const firebaseConfig = {
    apiKey: import.meta.env.VITE_Firebase_API_Key,
    authDomain: import.meta.env.VITE_authDomain,
    databaseURL: import.meta.env.VITE_databaseURL,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
    measurementId: import.meta.env.VITE_measurementId,
  };
export const FirebaseApp = initializeApp(firebaseConfig);

const FirebaseAuth = getAuth(FirebaseApp);
const FirebaseDatabase = getDatabase(FirebaseApp);
const provider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);

export const useFirebase = ()=>useContext(FirebaseContext);

export const FirbaseProvider = (props)=>{
    
    const signinWithGoogle = ()=>{
        signInWithPopup(FirebaseAuth,provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

    const CreateUserWithEmailAndPassword = (email,password) =>{
        createUserWithEmailAndPassword(FirebaseAuth,email,password).then((value) => {console.log(value)}).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
    }

    const SignInWithEmailAndPassword = (email,password)=>{
        signInWithEmailAndPassword(FirebaseAuth, email, password).then((val)=>{
            console.log(val,"login successful")
        }).catch((err)=>alert("Invalid Login Credentials!"))
    }

    const putData = (data,key) => set(ref(FirebaseDatabase,key),data)

    return <FirebaseContext.Provider value={{CreateUserWithEmailAndPassword, SignInWithEmailAndPassword, putData, signinWithGoogle}}>
        {props.children}
    </FirebaseContext.Provider>
}
