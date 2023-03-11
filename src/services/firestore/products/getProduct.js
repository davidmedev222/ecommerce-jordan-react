import { getFirestore, doc, getDoc } from 'firebase/firestore' // FIRESTORE

const getProduct = async (id) => {
  const database = getFirestore()
  const docRef = doc(database, 'items', id)
  const querySnapshot = await getDoc(docRef)
  if (!querySnapshot.exists()) return Promise.reject(new Error('Product not found'))
  return querySnapshot.data()
}

export { getProduct }
