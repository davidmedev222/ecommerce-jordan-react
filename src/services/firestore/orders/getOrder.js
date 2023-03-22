import { getFirestore, doc, getDoc } from 'firebase/firestore'

const getOrder = async (id) => {
  const database = getFirestore()
  const docRef = doc(database, 'orders', id)
  const querySnapshot = await getDoc(docRef)
  if (!querySnapshot.exists()) return Promise.reject(new Error('Order no found'))
  return querySnapshot.data()
}

export { getOrder }
