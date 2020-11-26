import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCxuDIbn75mUsM2Xkxlry2qZq9WzlKcVTQ",
    authDomain: "tinder-clone-246a9.firebaseapp.com",
    databaseURL: "https://tinder-clone-246a9.firebaseio.com",
    projectId: "tinder-clone-246a9",
    storageBucket: "tinder-clone-246a9.appspot.com",
    messagingSenderId: "648746867747",
    appId: "1:648746867747:web:79137bae1867b423e3a596",
    measurementId: "G-VBELVCNWFC"
  };

//   initializing the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

// exporting database
export default database;