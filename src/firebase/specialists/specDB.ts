import firebase from '../firebaseConfig'
import { SpecType } from '../../types/specialists'

type QuerySnapshot = firebase.firestore.QuerySnapshot
const db = firebase.firestore()

class SpecDB {
  private dataParser = (rawData: QuerySnapshot) => {
    return rawData.docs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
  }

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
    return this.dataParser(rawData)
  }

  update = async (id: string, specObj: SpecType) => {
    await db.collection('psycologists').doc(id).set(specObj)
  }
}

export default new SpecDB()
