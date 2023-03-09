import { getFirestore, getDocs, collection } from 'firebase/firestore' // FIRESTORE

const getItems = async () => {
  try {
    const database = getFirestore()
    const request = await getDocs(collection(database, 'items'))
    const response = request.docs.map((doc) => doc.data())
    return response
  } catch (error) {
    console.log(error)
  }
}

export { getItems }
