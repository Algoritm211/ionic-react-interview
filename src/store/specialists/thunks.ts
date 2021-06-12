import { AppDispatch } from '../store'
import { setAllSpecs, specUpdate, toggleIsLoading } from './reducer'
import SpecDB from '../../firebase/specialists/specDB'
import { SpecType } from '../../types/specialists'


export const loadAllSpecs = () => async (dispatch: AppDispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await SpecDB.getAll()
  dispatch(setAllSpecs(data))
  dispatch(toggleIsLoading(false))
}

export const updateSpec = (specInfo: SpecType, isLiked: boolean) => async (dispatch: AppDispatch) => {
  const { id, ...specData } = specInfo
  try {
    if (id) {
      await SpecDB.update(id, { ...specData, isLiked })
      dispatch(specUpdate({ ...specInfo, isLiked }))
    }
  } catch (error) {
    console.log(error)
  }
}
