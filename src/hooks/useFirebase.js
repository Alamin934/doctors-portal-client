import { useEffect, useState } from "react";
import initializeFirebase from "../FireBase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
//initialize app
initializeFirebase();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, history, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to database
                saveUser(email, name, 'POST');
                //send name to
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => { })
                    .catch((error) => { });

                history.push('/');
            })
            .catch((error) => {
                // const errorCode = error.code;
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, history, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const signInWithGoogle = (history, location) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };


    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    };


    //user observe state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        logOut,
        loginUser,
        signInWithGoogle
    }
};

export default useFirebase;