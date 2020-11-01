import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyAd60PC9dh2QIKLB66h0TTRID-f5oGe64I',
	authDomain: 'todo-app-cp-b8a74.firebaseapp.com',
	databaseURL: 'https://todo-app-cp-b8a74.firebaseio.com',
	projectId: 'todo-app-cp-b8a74',
	storageBucket: 'todo-app-cp-b8a74.appspot.com',
	messagingSenderId: '375341171064',
	appId: '1:375341171064:web:45cd749ef68399fe0e088d',
	measurementId: 'G-6BMRJRKNG7',
});

const db = firebaseApp.firestore();

export default db;
