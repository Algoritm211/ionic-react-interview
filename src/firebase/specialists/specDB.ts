import firebase from '../firebaseConfig'
import { SpecType } from '../../types/specialists'
const db = firebase.firestore()

class SpecDB {
  // specObj must have the same fields as specialist type
  create = async (specObj: SpecType) => {
    await db.collection('psycologists').add(specObj)
  }

  // favFilter means all specs, only favourite, only disFavorite
  getAll = async (filters: Array<string>, isLiked?: boolean) => {
    const collection = db.collection('psycologists')
    let query = collection.where('type', 'in', filters)
    if (isLiked !== undefined) {
      query = query.where('isLiked', '==', isLiked)
    }
    const rawData = await query.get()
    const data = rawData.docs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
    return data
  }

  update = async (id: string, specObj: SpecType) => {
    const rawData = await db.collection('psycologists').doc(id).set(specObj)
    console.log(rawData)
  }
}

export default new SpecDB()
