import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDx7j2Pvg_a9crRXS8fzh9D7Q19oBoc6W4',
  authDomain: 'react-crwn-app-29c45.firebaseapp.com',
  databaseURL: 'https://react-crwn-app-29c45.firebaseio.com',
  projectId: 'react-crwn-app-29c45',
  storageBucket: 'react-crwn-app-29c45.appspot.com',
  messagingSenderId: '454019214838',
  appId: '1:454019214838:web:44427fc93446dc5bef6bd7',
  measurementId: 'G-JDKZKV3Y59',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const provider_facebook = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
provider_facebook.setCustomParameters({ display: 'popup' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithFacebook = () => auth.signInWithPopup(provider_facebook);

export default firebase;
