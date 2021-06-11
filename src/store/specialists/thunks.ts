import {AppDispatch} from "../store";
import {setAllSpecs, toggleIsLoading} from "./reducer";
import SpecDB from "../../firebase/specialists/specDB";

export const loadAllSpecs = () => async (dispatch: AppDispatch) => {
  dispatch(toggleIsLoading(true))
  const data = await SpecDB.getAll()
  dispatch(setAllSpecs(data))
  dispatch(toggleIsLoading(false))
}
