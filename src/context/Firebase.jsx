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
    apiKey: `${process.env.Firebase_API_Key}`,
    authDomain: "food-heaven-ca5f6.firebaseapp.com",
    databaseURL: "https://food-heaven-ca5f6-default-rtdb.firebaseio.com",
    projectId: "food-heaven-ca5f6",
    storageBucket: "food-heaven-ca5f6.appspot.com",
    messagingSenderId: "1060262987055",
    appId: "1:1060262987055:web:a9c838004b06d29e534dda",
    measurementId: "G-276E3CC01T",
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
