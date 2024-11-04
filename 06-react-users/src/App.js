import React from 'react'
import './index.scss'
import { Success } from './components/Success'
import { Users } from './components/Users/Users'
import { useState } from 'react'
import { useEffect } from 'react'

// Тут список пользователей: https://reqres.in/api/users

function App() {
	const [users, setUsers] = useState([])
	const [isLoading, setLoading] = useState(true)
	const [searchValue, setSearchValue] = useState('')
	const [invites, setInvites] = useState([])
	const [success, setSuccess] = useState(false)
	useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then(res => res.json())
			.then(json => {
				setUsers(json.data)
			})
			.catch(err => console.log(err))
			.finally(() => setLoading(false))
	}, [])

	const handleSearchValue = e => {
		setSearchValue(e.target.value)
	}
	const checkInvitationUser = id => {
		if (invites.includes(id)) {
			setInvites(prev => prev.filter(item => item !== id))
		} else {
			setInvites(prev => [...prev, id])
		}
	}
	const sendInvites = () => {
		return invites.length > 0 ? setSuccess(true) : null
	}
	return (
		<div className='App'>
			{success ? (
				<Success count={invites.length} />
			) : (
				<Users
					handleSearchValue={handleSearchValue}
					searchValue={searchValue}
					items={users}
					isLoading={isLoading}
					invites={invites}
					checkInvitationUser={checkInvitationUser}
					sendInvites={sendInvites}
				/>
			)}
		</div>
	)
}

export default App
