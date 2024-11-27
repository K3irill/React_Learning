import { configureStore } from '@reduxjs/toolkit'
import post from './reducers/postSlice'
export const store = configureStore({
	reducer: { post },
})
