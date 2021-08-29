import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBmy6nssvvA5yTdfauUn4CoOkqtaCJqnrA',
	authDomain: 'barbergram-b4770.firebaseapp.com',
	projectId: 'barbergram-b4770',
	storageBucket: 'barbergram-b4770.appspot.com',
	messagingSenderId: '38479069387',
	appId: '1:38479069387:web:2ddf83bd08931562f3db4e',
};

// Initialize Firebase

//

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
