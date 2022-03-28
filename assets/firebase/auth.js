//#region imports
import { initializeApp } from 'firebase/app'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut,
    onAuthStateChanged
} from 'firebase/auth'
//#endregion imports

//#region variables
const firebaseConfig = {
    apiKey: "AIzaSyAsjMEpP5dS1eNZMRGfu1pRYZiMYisAHhc",
    authDomain: "creotec-bb78f.firebaseapp.com",
    projectId: "creotec-bb78f",
    storageBucket: "creotec-bb78f.appspot.com",
    messagingSenderId: "625893599624",
    appId: "1:625893599624:web:d779c04c398261b3d4323d"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const auth = getAuth();

//#endregion variables

//#region UserAuth

// sign up
const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, signupForm.email.value, signupForm.password.value)
        .then((credential) =>{
            // console.log("User created: ", credential.user);
            signupForm.reset();
        })
        .catch((error) => {
            console.error(error.message);
    });
});

//log in
const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, loginForm.email.value, loginForm.password.value)
    .then((credential) =>{
        // console.log("User logged in: ", credential.user);
        loginForm.reset();
    })
    .catch((error) => {
        console.error(error.message);
});
});

//log out
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            // console.log('logged out');
        })
        .catch((error) => console.error(error.message));
});

// subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
    console.log('user status changed: ', user)
})

//#endregion UserAuth
