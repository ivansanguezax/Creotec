//#region imports
import { initializeApp } from 'firebase/app'

import {
    getFirestore, collection,
    getDocs,addDoc,
    query, where,
    serverTimestamp
} from 'firebase/firestore'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
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
const db = getFirestore();
const auth = getAuth();

// collections
const colUsers = collection(db, "users");
const colOrders = collection(db, "orders");
const colMakerOrders = collection(db, "maker_orders");

//#endregion variables

//#region UserAuth

// sign up
try {
    const signupForm = document.querySelector('.signup-form');
    document.getElementById("signup-button").addEventListener('click', (e) => {
        e.preventDefault();
    
        if (signupForm.password.value === signupForm.confirm_password.value) {
            
            getDocs(query(colUsers, where("mail", "==", signupForm.email.value)))
            .then((snapshot) =>{
                let user = [];
                snapshot.docs.forEach((doc) => {
                        user.push({ ...doc.data(), id: doc.id});
                    });
                    
                if(user.length == 0){
                    createUserWithEmailAndPassword(auth, signupForm.email.value, signupForm.password.value)
                        .then((credential) =>{
                            console.log("User created: ", credential.user);
                            addDoc(colUsers, {  //sending books as parameter
                                country: document.getElementById("country_input").value,
                                mail: signupForm.email.value,
                                name: signupForm.name.value,
                                phone: parseInt(signupForm.phone.value),
                            })
                            .then(() => {
                                signupForm.reset();
                            });
                        })
                        .catch((error) => {
                            console.error(error.message);
                        });
                    }
                else console.log("Usuario ya registrado");
                });
            } else console.log("Las contraseñas no coinciden");
            
    });
} catch (error) {
    console.log(error.message);
}

//! log in
//* email
const loginForm = document.querySelector('.form-signin');
try {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        signInWithEmailAndPassword(auth, loginForm.email.value, loginForm.password.value)
            .then((credential) =>{
                console.log("User logged in: ", credential.user);
                loginForm.reset();
                window.location.href = "./user-view.html";
            })
            .catch((error) => {
                console.error(error.message);
        });
    });
} catch (error){}

//* google
const googleAuthButton = document.querySelector("#google-signin-button");
try {
    googleAuthButton.addEventListener("click", (e) => {
        const provider = new GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
          }).catch((error) => {
            console.error(error.message);
            // ...
          });
    });    
} catch (error) {}

// log out
try {
    const logoutButton = document.querySelector('#logout-button');
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        signOut(auth)
            .then(() => {
                window.location.href = "./";
            })
            .catch((error) => console.error(error.message));
    });
} catch (error) {
    console.log(error.message);
}

// subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
    console.log('user status changed: ', user);
    if (user == null && window.location.pathname == "/user-view.html")
        window.location.href="./login.html";
    if (window.location.pathname == "/user-view.html"){
        getDocs(query(colUsers, where("mail", "==", user.email)))
            .then((snapshot) =>{
                    let user = [];
                    snapshot.docs.forEach((doc) => {
                            user.push({ ...doc.data(), id: doc.id});
                    });
                    document.getElementById("user-greeting").innerHTML += " " + user[0].name.split(' ')[0];
        });
        // document.getElementById("user-greeting").innerHTML += " "+ 
    }
});


//#endregion UserAuth

//#region CRUD

//! Create
const orderBookForm = document.querySelector('.order');
document.getElementById("submit-order-button").addEventListener('click', (e) => {
    addDoc(colOrders, {  //sending books as parameter
        createdAt: serverTimestamp(),
        name: orderBookForm.name.value,
        phone: parseInt(orderBookForm.phone.value),
        email: orderBookForm.email.value,
        ampute_type: document.querySelector("input[value='option1']").checked ? "Solicitud de compra de prótesis" : (document.querySelector("input[value='option2']").checked? "Solicitud de donación de prótesis" : "Solicitud de empresa para proyecto RSE") 
    })
    .then(() => {
        orderBookForm.reset();
    });
});

//#endregion CRUD