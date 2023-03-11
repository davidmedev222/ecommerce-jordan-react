import { getFirestore, collection, getDocs } from 'firebase/firestore'

const getProducts = async () => {
  const database = getFirestore()
  const collectionRef = collection(database, 'items')
  const querySnapshot = await getDocs(collectionRef)
  return querySnapshot.docs.map((product) => product.data())
}

export { getProducts }
