import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";

export const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider)
        .then((res) => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            return signedInUser;
        }).catch((error) => {
            console.log(error.message);
        });
}

export const facebookLogin = () => {
    const fbProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, fbProvider)
        .then((res) => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            return signedInUser;
        }).catch((error) => {
            console.log(error.message);
        });
}

export const createUserWithPassword = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const newUserInfo = userCredential.user;
            newUserInfo.success = true;
            newUserInfo.error = '';
            updateUserName(name);
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {}
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const signInWithEmaiAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in  
            const { displayName, email } = userCredential.user;
            const signedInUser = {
                name: displayName,
                email: email,
                error: '',
                success: true
            }
            return signedInUser;

            // const newUserInfo = userCredential.user;
            // newUserInfo.success = true;
            // newUserInfo.error = '';
            // newUserInfo.name = newUserInfo.displayName;
            // return newUserInfo;
            // console.log("login:", userCredential);
        })
        .catch((error) => {
            const newUserInfo = {}
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
            // console.log("login fail:", error);
        });
}

const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
        displayName: name
    }).then(() => {
        console.log('Username update successfully');
    }).catch((error) => {
        console.log(error.message);
    });
}