import styles from './Home.module.css'
import { cars } from './cars.data.js'
import CarItem from './car-item/CarItem.jsx'
import { useContext, useEffect, useMemo, useState } from 'react'
import CarCreateForm from './car-create-form/CarCreateForm.jsx'
import { CarService } from '../../../services/car.services.js'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider.jsx'

function Home() {
	const [carsData, setCarsData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await CarService.getAll()

			setCarsData(response.data)
		}
		fetchData()
	}, [])
	const { user, setUser } = useContext(AuthContext)
	//Ещё вариант навигации
	// const nav = useNavigate()
	// <button onclick={()=> nav('/car/1')}>Перейти</button>

	return (
		<div>
			<h1>Cars</h1>
			{user ? (
				<>
					<h2>Welcome, {user.name}</h2>{' '}
					<button onClick={() => setUser(null)}>Log out</button>
				</>
			) : (
				<button onClick={() => setUser({ name: 'Kail' })}>Log in</button>
			)}
			<CarCreateForm setCarsData={setCarsData} />
			<div>
				{carsData.length > 0
					? carsData.map(car => <CarItem key={car.id} car={car} />)
					: 'Машин нет'}
			</div>
		</div>
	)
}
export default Home
