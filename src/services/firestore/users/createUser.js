import { getFirestore, doc, setDoc } from 'firebase/firestore'

const createUser = (user) => {
  const { uid, email, displayName } = user
  const database = getFirestore()
  const docRef = doc(database, 'users', uid)
  const userData = { uid, email, displayName, orders: [] }
  return setDoc(docRef, userData)
}

export { createUser }
