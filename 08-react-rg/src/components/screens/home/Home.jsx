import styles from './Home.module.css'
import { cars } from './cars.data.js'
import CarItem from './car-item/CarItem.jsx'
import { useEffect, useMemo, useState } from 'react'
import CarCreateForm from './car-create-form/CarCreateForm.jsx'
import axios from 'axios'
function Home() {
	const [carsData, setCarsData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('http://localhost:5172/cars')

			setCarsData(response.data)
		}
		fetchData()
	}, [])

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
