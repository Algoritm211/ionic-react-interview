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
    },
    specUpdate: (state, action) => {
      // callback for updating specialist
      const updateCallback = (spec: SpecType) => {
        if (spec.id === action.payload.id) {
          return action.payload
        }
        return spec
      }
      state.allSpecs = state.allSpecs.map((spec) => updateCallback(spec))
      state.favouriteSpecs = state.favouriteSpecs.map((spec) => updateCallback(spec))
      state.disFavouriteSpecs = state.disFavouriteSpecs.map((spec) => updateCallback(spec))
    }
  }
})

export const {
  toggleIsLoading,
  setAllSpecs,
  setDisFavouriteSpecs,
  setFavouriteSpecs,
  specUpdate
} = specSlice.actions

export default specSlice.reducer
