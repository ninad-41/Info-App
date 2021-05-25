import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyDCZBm2uEpv_IbrpxxcL5uTaRepLdAb3n8',
  authDomain: 'my-coach-app-dd324.firebaseapp.com',
  projectId: 'my-coach-app-dd324',
  storageBucket: 'my-coach-app-dd324.appspot.com',
  messagingSenderId: '674188034221',
  appId: '1:674188034221:web:6ca2470dd3583a99af4624',
};
//Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
