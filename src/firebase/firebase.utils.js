import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config =
    {
        apiKey: "AIzaSyD1bcbAU1ZJhaTAOtEMg4QsDCS2zGGaLgg",
        authDomain: "crwn-db-771e1.firebaseapp.com",
        databaseURL: "https://crwn-db-771e1.firebaseio.com",
        projectId: "crwn-db-771e1",
        storageBucket: "crwn-db-771e1.appspot.com",
        messagingSenderId: "991138130255",
        appId: "1:991138130255:web:d37559c656d2f79840bd3a"
    };


export const createUserProfileDocument = async (userAuth , additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    } catch (e) {
        console.log('error creating user', e.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;