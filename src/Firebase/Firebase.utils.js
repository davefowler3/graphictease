import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp ({
    apiKey: "AIzaSyB1SSNOyYf19ivE-_Y7AKFwt47TkNm8Nwk",
    authDomain: "graphic-tease.firebaseapp.com",
    projectId: "graphic-tease",
    storageBucket: "graphic-tease.appspot.com",
    messagingSenderId: "1057564822664",
    appId: "1:1057564822664:web:d4c0487805af817aa0e33d",
    measurementId: "G-S25234XJJQ"
});

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new getAuth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebaseApp;