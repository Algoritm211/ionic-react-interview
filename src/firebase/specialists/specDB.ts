import firebase from '../firebaseConfig'
import {SpecType} from "../../types/specialists";
const db = firebase.firestore()

class SpecDB {
  // specObj must have the same fields as specialist type
  create = async (specObj: SpecType) => {
    await db.collection('psycologists').add(specObj)
  }

  getAll = async () => {
    const rawData = await db.collection("psycologists").get()
    const data = rawData.docs.map((doc) => {
      return {...doc.data(), id: doc.id}
    })
    return data
  }

  update = async (id: string, specObj: SpecType) => {
    const rawData = await db.collection("psycologists").doc(id).set(specObj)
  }
}

export default new SpecDB()
