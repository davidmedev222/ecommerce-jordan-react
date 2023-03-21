import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { auth } from '../../export'

const getOrders = async () => {
  const { email } = auth.currentUser
  const database = getFirestore()
  const collectionRef = collection(database, 'orders')
  const q = query(collectionRef, where('buyer.email', '==', email))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((order) => ({ data: order.data(), id: order.id }))
}

export { getOrders }
