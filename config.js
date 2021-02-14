import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB2ccqom7HLdRYStdfxxb-sDUCWfks5UGo",
  authDomain: "newletter-ec5cd.firebaseapp.com",
  databaseURL: "https://newletter-ec5cd.firebaseio.com",
  projectId: "newletter-ec5cd",
  storageBucket: "newletter-ec5cd.appspot.com",
  messagingSenderId: "913038218823",
  appId: "1:913038218823:web:c2521c417c938010ca8362"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();