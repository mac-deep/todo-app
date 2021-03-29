import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAe_eVul1RAKxk_Gr_DQ8cpJx2r1aYpnHs',
  authDomain: 'todo-app-2525.firebaseapp.com',
  projectId: 'todo-app-2525',
  storageBucket: 'todo-app-2525.appspot.com',
  messagingSenderId: '917941803725',
  appId: '1:917941803725:web:06337a1a6835af821ca784',
  measurementId: 'G-9WX6CHBCPZ',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
