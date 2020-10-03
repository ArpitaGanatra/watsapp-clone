import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-sSbH5anY7Dqv2LzcfIw2KslQY5Q1y6c",
    authDomain: "whats-app-clone-b7d9d.firebaseapp.com",
    databaseURL: "https://whats-app-clone-b7d9d.firebaseio.com",
    projectId: "whats-app-clone-b7d9d",
    storageBucket: "whats-app-clone-b7d9d.appspot.com",
    messagingSenderId: "69265862097",
    appId: "1:69265862097:web:330fbb735fa33ad07284f0",
    measurementId: "G-ZKTMDXFBM8"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db