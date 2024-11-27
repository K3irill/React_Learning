const { createAsyncThunk } = require('@reduxjs/toolkit')

export const fetchPosts = createAsyncThunk(
	'post/fetchAll',
	async (_, thunkApi) => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts')
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			return await response.json()
		} catch (error) {
			return thunkApi.rejectWithValue('Не удалось загрузить посты')
		}
	}
)
