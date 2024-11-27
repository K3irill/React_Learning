import { fetchPosts } from './actionCreator'

const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
	posts: [],
	isLoading: false,
	error: null,
}

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = null
				state.posts = action.payload
			})
			.addCase(fetchPosts.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload.message
			})
	},
})

export default postSlice.reducer
