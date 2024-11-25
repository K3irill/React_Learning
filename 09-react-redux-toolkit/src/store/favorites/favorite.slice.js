import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, action) => {
			const recipe = action.payload
			const isExists = state.some(r => r.id === recipe.id)

			if (isExists) {
				return state.filter(r => r.id !== recipe.id)
			} else {
				state.push(recipe)
			}
		},
	},
})

export const { actions, reducer } = favoriteSlice
