import firebase from 'firebase/app'


const ConfigFirebase = ({
    // ADD CONFIG FIREBASE
    apiKey: "AIzaSyB4cG4UcpJs_wOTkUV3D7P7oo4LnYRnc84",
    authDomain: "restaurants-18ce9.firebaseapp.com",
    databaseURL: "https://restaurants-18ce9.firebaseio.com",
    projectId: "restaurants-18ce9",
    storageBucket: "restaurants-18ce9.appspot.com",
    messagingSenderId: "906077270520",
    appId: "1:906077270520:web:2661dadf559b97d6c8a60d"
})

export const firebaseApp = firebase.initializeApp(ConfigFirebase);