import { getFirestore, doc, getDoc } from 'firebase/firestore'

const getProduct = async (id) => {
  const database = getFirestore()
  const docRef = doc(database, 'items', id)
  const querySnapshot = await getDoc(docRef)
  if (!querySnapshot.exists()) return Promise.reject(new Error('404, Product Not Found'))
  return [querySnapshot.data()]
}

export { getProduct }
