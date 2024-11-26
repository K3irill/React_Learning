import { configureStore } from '@reduxjs/toolkit'
import { cashReducer } from './cashReducer'
import { customersReducer } from './customersReducer'
import { composeWithDevTools } from '@redux-devtools/extension'

export const store = configureStore({
	reducer: {
		cash: cashReducer,
		customers: customersReducer,
	},
	composeWithDevTools,
})
