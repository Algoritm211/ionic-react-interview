import firebase from '../firebaseConfig'
const db = firebase.firestore()

class SpecDB {
  getAll = async () => {
    const rawData = await db.collection("psycologists").get()
    const data = rawData.docs.map((doc) => doc.data())
    return data
  }
}

export default new SpecDB()
