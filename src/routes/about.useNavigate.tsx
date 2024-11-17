import { useNavigate } from 'react-router-dom'

const AboutUseNavigate: React.FC = () => {
	const navigate = useNavigate()
	const handleNavigate = () => {
		navigate('/about-use-memo', { state: { from: 'useNavigate' } })
	}
	return <button onClick={handleNavigate}>Go to memo</button>
}
export default AboutUseNavigate
