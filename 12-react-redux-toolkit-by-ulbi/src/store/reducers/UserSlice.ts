import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUset'
import { fetchUsers } from './ActionCreator'

interface UserState {
	users: IUser[]
	isLoading: boolean
	error: string | null
	count: number
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: null,
	count: 0,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(
				fetchUsers.fulfilled,
				(state, action: PayloadAction<IUser[]>) => {
					state.isLoading = false
					state.error = null
					state.users = action.payload
				}
			)
			.addCase(fetchUsers.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchUsers.rejected, (state, action: PayloadAction<string>) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export default userSlice.reducer
