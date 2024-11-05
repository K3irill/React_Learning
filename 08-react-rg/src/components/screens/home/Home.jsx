import styles from './Home.module.css'
import { cars } from './cars.data.js'
import CarItem from './car-item/CarItem.jsx'
import { useEffect, useMemo, useState } from 'react'
import CarCreateForm from './car-create-form/CarCreateForm.jsx'
import { CarService } from '../../../services/car.services.js'
import { useNavigate } from 'react-router-dom'

function Home() {
	const [carsData, setCarsData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await CarService.getAll()

			setCarsData(response.data)
		}
		fetchData()
	}, [])

	//Ещё вариант навигации
	// const nav = useNavigate()
	// <button onclick={()=> nav('/car/1')}>Перейти</button>

	return (
		<div>
			<h1>Cars</h1>
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
