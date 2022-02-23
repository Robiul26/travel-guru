import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
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