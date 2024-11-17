import { useParams } from 'react-router-dom'

const UserProfile: React.FC = () => {
	const { username } = useParams<{ username: string }>()
	return <h1>Profile of {username}</h1>
}
export default UserProfile
