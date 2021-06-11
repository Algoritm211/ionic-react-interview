import {RootState} from "../store";

export const getAllSpecs = (state: RootState) => {
  return state.specReducer.allSpecs
}

export const getIsLoading = (state: RootState) => {
  return state.specReducer.isLoading
}
