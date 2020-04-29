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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
