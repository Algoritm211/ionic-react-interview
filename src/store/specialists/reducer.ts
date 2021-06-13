import { createSlice } from '@reduxjs/toolkit'
import { SpecType } from '../../types/specialists'

type SpecSliceType = {
  isLoading: Boolean,
  allSpecs: Array<SpecType>,
}

const specSlice = createSlice({
  name: 'specSlice',
  initialState: {
    isLoading: false,
    allSpecs: [],
  } as SpecSliceType,
  reducers: {
    setAllSpecs: (state, action) => {
      state.allSpecs = action.payload
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
    },
  },
})

export const {
  toggleIsLoading,
  setAllSpecs,
  specUpdate,
} = specSlice.actions

export default specSlice.reducer
