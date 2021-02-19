const firebase = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyA34pVcwYd_TcL7dl-QTUhMcePJl_UyR48",
  authDomain: "fir-emulator-21d59.firebaseapp.com",
  projectId: "fir-emulator-21d59",
  storageBucket: "fir-emulator-21d59.appspot.com",
  messagingSenderId: "527721235426",
  appId: "1:527721235426:web:57a1a1991b502053152fbb",
  measurementId: "G-87LHHMW4BX"
}

firebase.default.initializeApp(firebaseConfig)
const db = firebase.default.firestore()
db.useEmulator('localhost', 8080)

it('test is ok', async () => {
  const randomString = String(Math.random())
  await db.collection('any').doc(randomString)
    .set({
      any: 'anything'
    })

  expect(1).toBe(1)
})

