// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCK0CRO0eC5Fv7oDjh6_Hi7ARqcnZZxqL8',
  authDomain: 'adminproject-925d4.firebaseapp.com',
  projectId: 'adminproject-925d4',
  storageBucket: 'adminproject-925d4.appspot.com',
  messagingSenderId: '127240912858',
  appId: '1:127240912858:web:fe24e087d1e77f45ab4ae3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
