import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAx5MVhBvzTFE_0AH8S7dp416-TpdjxFug"',
  authDomain: 'cropchat-c7a0e.firebaseapp.com',
  databaseURL: 'https://cropchat-c7a0e.firebaseio.com',
  projectId: 'cropchat-c7a0e',
  storageBucket: 'cropchat-c7a0e.appspot.com',
  messagingSenderId: '1020580736164'
}
firebase.initializeApp(config)

const database = firebase.database()
const storage = firebase.storage()

export {
  database,
  storage
}
