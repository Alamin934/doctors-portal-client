import { useState } from "react";
import initializeFirebase from "../FireBase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import { useEffect } from "react";

initializeFirebase();
const useFirebase = () => {

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [admin, setAmdin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [token, setToken] = useState('');

    const userRegistration = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to the database
                saveUser(email, name, 'POST');
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                setAuthError('');
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const userLogin = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let destination = location?.state?.from || "/";
                navigate(destination, { replace: true });
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                let destination = location?.state?.from || "/";
                navigate(destination, { replace: true });
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //Obserber user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    //check admin
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAmdin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch(`http://localhost:5000/users`, {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then()
    };






    return {
        user,
        admin,
        userRegistration,
        userLogin,
        signInWithGoogle,
        logOut,
        isLoading,
        authError,
        token
    }

}

export default useFirebase;