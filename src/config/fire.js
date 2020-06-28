import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB3wJI29IhJdz_3r3ing6bZ2RDg4e8mjAE",
    authDomain: "tracking-doc-e06e2.firebaseapp.com",
    databaseURL: "https://tracking-doc-e06e2.firebaseio.com",
    projectId: "tracking-doc-e06e2",
    storageBucket: "tracking-doc-e06e2.appspot.com",
    messagingSenderId: "568654453339",
    appId: "1:568654453339:web:a96d08432f32fd97583d7e",
    measurementId: "G-5VSHL6J9DP"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  fire.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION); // force logout when window is closed!

  export default fire;