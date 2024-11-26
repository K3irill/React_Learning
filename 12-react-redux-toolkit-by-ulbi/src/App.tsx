import './App.css'

import { userSlice } from './store/reducers/UserSlice'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { useEffect } from 'react'
import { fetchUsers } from './store/reducers/ActionCreator'

function App() {
	const dispatch = useAppDispatch()
	const { users, error, isLoading } = useAppSelector(state => state.useReducer)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	return (
		<>
			<div>
				{isLoading && <h2>Loading...</h2>}
				{error && <h2>{error}</h2>}
				{JSON.stringify(users, null, 2)}
			</div>
		</>
	)
}

export default App
