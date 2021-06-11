import {createSlice} from "@reduxjs/toolkit";
import {SpecType} from "../../types/specialists";

type SpecSliceType = {
  isLoading: Boolean,
  allSpecs: Array<SpecType>,
  favouriteSpecs: Array<SpecType>,
  disFavouriteSpecs: Array<SpecType>,
}

const specSlice = createSlice({
  name: "specSlice",
  initialState: {
    isLoading: false,
    allSpecs: [],
    favouriteSpecs: [],
    disFavouriteSpecs: [],
  } as SpecSliceType,
  reducers: {
    setAllSpecs: (state, action) => {
      state.allSpecs = action.payload
    },
    setFavouriteSpecs: (state, action) => {
      state.favouriteSpecs = action.payload
    },
    setDisFavouriteSpecs: (state, action) => {
      state.disFavouriteSpecs = action.payload
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const {
  toggleIsLoading,
  setAllSpecs,
  setDisFavouriteSpecs,
  setFavouriteSpecs
} = specSlice.actions

export default specSlice.reducer
