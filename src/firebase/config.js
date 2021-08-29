import { initializeApp } from 'firebase/app';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCFyjxvMohkpE0n98EeIGUguN7_zjl7DIY',
	authDomain: 'barberino-9889a.firebaseapp.com',
	databaseURL:
		'https://barberino-9889a-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'barberino-9889a',
	storageBucket: 'barberino-9889a.appspot.com',
	messagingSenderId: '609892777197',
	appId: '1:609892777197:web:645aef9f6b1faa777f60e4',
	measurementId: 'G-0Y3HNCG3CF',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
