import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'

const withAuth = Component => props => {
	const { user, setUser } = useContext(AuthContext)
	if (!user) return <p>Вы не авторизированны! Пожалуйста войдите в систему.</p>

	return <Component {...props} />
}

export default withAuth
