import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBq4erpgFuY_Vqy4qEtQRXjvtQlVB3P4Bw',
  authDomain: 'crwn-db-a4f14.firebaseapp.com',
  databaseURL: 'https://crwn-db-a4f14.firebaseio.com',
  projectId: 'crwn-db-a4f14',
  storageBucket: 'crwn-db-a4f14.appspot.com',
  messagingSenderId: '363293673358',
  appId: '1:363293673358:web:525837d39aa327155646df',
  measurementId: 'G-52Q4C7N0KN',
};

firebase.initializeApp(config);

/* DocumentReference vs CollectionReference
  DocumentReference: CRUD methods, 
*/

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if userAuth is null (=false), do nothing
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  /* checking if there's any data in that place, if isn't, create a new user */
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // .set -> the create method
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error Creating User', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
