import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD56nSEpgr7kcSv7UXkLcHtmXm_G-b50DA',
  authDomain: 'e-commerce-jordan-react.firebaseapp.com',
  projectId: 'e-commerce-jordan-react',
  storageBucket: 'e-commerce-jordan-react.appspot.com',
  messagingSenderId: '316834168469',
  appId: '1:316834168469:web:f508b50daf101f8d49a59c'
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)

export { firebaseConfig, auth }
