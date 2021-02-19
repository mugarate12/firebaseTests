import firebase from 'firebase'


let firebaseConfig = {
  apiKey: "AIzaSyA34pVcwYd_TcL7dl-QTUhMcePJl_UyR48",
  authDomain: "fir-emulator-21d59.firebaseapp.com",
  projectId: "fir-emulator-21d59",
  storageBucket: "fir-emulator-21d59.appspot.com",
  messagingSenderId: "527721235426",
  appId: "1:527721235426:web:57a1a1991b502053152fbb",
  measurementId: "G-87LHHMW4BX"
}

// export function getDatabase(isTest) {
//   if (isTest) {
//     let database = firebase.firestore()
//     // return database.useEmulator('localhost', 8080)
//     return database
//   } else {
//     return firebase.firestore()
//   }
// }

// // let database = firebase.firestore()
// // if (location.hostname === 'localhost') {
// //   database.useEmulator('localhost', 8080)
// // }

let firebaseInstance
let database

if (!firebase.apps.length) {
  firebaseInstance = firebase.initializeApp(firebaseConfig)
  database = firebase.firestore()
  database.useEmulator('localhost', 8080)
} else {
  firebaseInstance = firebase.app()
  database = firebase.firestore()
  // database.useEmulator('localhost', 8080)
}


export default firebaseInstance
export const db = database
