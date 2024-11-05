import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CarItem from '../home/car-item/CarItem'
import { CarService } from '../../../services/car.services'

const CarDetail = () => {
	const { id } = useParams()
	const [car, setCar] = useState({})

	useEffect(() => {
		if (!id) return
		const fetchData = async () => {
			const response = await CarService.getById(id)

			setCar(response)
		}
		fetchData()
	}, [id])

	if (!car?.name) return <p>Loading...</p>
	return (
		<div>
			<Link to='/'>Back</Link>
			<CarItem car={car} />
		</div>
	)
}

export default CarDetail
