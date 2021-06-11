import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import specSlice from './specialists/reducer'

const rootReducer = combineReducers({
  specReducer: specSlice
})



const store = configureStore({
  reducer: rootReducer
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// @ts-ignore
window.__store__ = store

export default store
