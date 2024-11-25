import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const apikey =import.meta.env.VITE_apiKey
const authDomain =import.meta.env.VITE_authDomain
const projectId =import.meta.env.VITE_projectId
const storageBucket =import.meta.env.VITE_storageBucket
const messagingSenderId =import.meta.env.VITE_messagingSenderId
const appId =import.meta.env.VITE_appId

const firebaseConfig = {
  apiKey: `${apikey}`,
  authDomain: `${authDomain}`,
  projectId: `${projectId}`,
  storageBucket: `${storageBucket}`,
  messagingSenderId: `${messagingSenderId}`,
  appId: `${appId}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const db= getFirestore(app)

interface Isignup{
    name?:string
    email:string
    password:string
}

const signup=async({name,email,password}:Isignup)=>{
    try {
       const response= await createUserWithEmailAndPassword(auth,email,password)
       const user=response.user

       await addDoc(collection(db,'user'),{
        uid:user.uid,
        name,
        authProvider:'local',
        email,
       })
    } catch (error:any) {
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const login =async({email, password}:Isignup)=>{
try {
    await signInWithEmailAndPassword(auth,email,password)
} catch (error:any) {
    toast.error(error.code.split('/')[1].split('-').join(' '))
        
}
}

const logout = ()=>{
    signOut(auth)
}
export {auth,db,login,signup,logout}