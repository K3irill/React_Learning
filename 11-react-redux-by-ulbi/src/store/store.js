import { configureStore } from '@reduxjs/toolkit'
import { cashReducer } from './reducers/cashReducer'
import { customersReducer } from './reducers/customersReducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import { thunk } from 'redux-thunk'

export const store = configureStore({
	reducer: {
		cash: cashReducer,
		customers: customersReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
})
