import { AppDispatch } from '../store'
import { setAllSpecs, specUpdate, toggleIsLoading } from './reducer'
import SpecDB from '../../firebase/specialists/specDB'
import { SpecType } from '../../types/specialists'

// All filters of specs now
const allFiltersOnPage = ['Психиатр', 'Психолог', 'Психотерапевт']
export const loadAllSpecs = (filters: Array<string>, isLiked?: boolean) => async (dispatch: AppDispatch) => {
  dispatch(toggleIsLoading(true))
  if (filters[0] === 'all') {
    filters = allFiltersOnPage
  }
  const data = await SpecDB.getAll(filters, isLiked)
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
