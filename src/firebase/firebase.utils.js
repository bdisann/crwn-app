import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC_DOiozkN0tD5ibzvkPD_PVQGOaqNVLzU",
  authDomain: "crwn-db-87d81.firebaseapp.com",
  projectId: "crwn-db-87d81",
  storageBucket: "crwn-db-87d81.appspot.com",
  messagingSenderId: "11090518722",
  appId: "1:11090518722:web:e0daeda8f032a0c688d15b",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = (await userRef).get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      (await userRef).set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
