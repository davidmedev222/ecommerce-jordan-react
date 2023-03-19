import { getFirestore, addDoc, collection } from 'firebase/firestore'

const createOrder = (order) => {
  const database = getFirestore()
  const collectionRef = collection(database, 'orders')
  return addDoc(collectionRef, order)
}

export { createOrder }
