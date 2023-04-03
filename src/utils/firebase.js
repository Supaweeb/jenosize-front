import Swal from 'sweetalert2'
import { initializeApp } from "firebase/app";
import { useDispatch } from "react-redux";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, EmailAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyQxjQkLNJsiXlj30iZ32ANPf5q23l_6k",
    authDomain: "jenosize-login.firebaseapp.com",
    projectId: "jenosize-login",
    storageBucket: "jenosize-login.appspot.com",
    messagingSenderId: "235619347896",
    appId: "1:235619347896:web:3bc0841cdd0e3f9a0a734d",
    measurementId: "G-8KBKM24X83"
};
 
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signIn = (_provider) => {
    // const dispatch = useDispatch();
    let provider;
    if (_provider === "facebook") {
        provider = new FacebookAuthProvider()
    } else if (_provider === "google") {
        provider = new GoogleAuthProvider()
    } else if (_provider === "email") {
        provider = new EmailAuthProvider()
    }

    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName
        const email = result.user.email
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        console.log(result)
        Swal.fire(
            'Login success',
            `Welcome ${name}`,
            'success'
        ).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "https://firebase.google.com/"
            }
        })
    }).catch((err) => {
        console.log(err)
        Swal.fire(
            'Login error',
            `${err}`,
            'error'
        )
    })
}

export const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
        const name = result.user.displayName
        const email = result.user.email
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        console.log(result)
        Swal.fire(
            'Login success',
            `Click OK to redirect url to firebase`,
            'success'
        ).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "https://firebase.google.com/"
            }
        })
    }).catch((err) => {
        console.log(err)
        Swal.fire(
            'Login error',
            `${err}`,
            'error'
        )
    })
}
