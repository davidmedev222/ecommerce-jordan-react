import { getFirestore, query, collection, where, getDocs, limit } from 'firebase/firestore'; // FIRESTORE

const getItem = async (queryId) => {
    try {
        const database = getFirestore();
        const q = query(collection(database, 'items'), where('cp', '==', queryId), limit(1));
        const request = await getDocs(q);
        const response = request.docs.map((doc) => doc.data());
        return response;
    } catch (error) {
        console.log(error);
    }
};

export { getItem };
