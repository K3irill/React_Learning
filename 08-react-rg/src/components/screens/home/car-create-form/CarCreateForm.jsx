import { useState } from 'react'
import styles from './CarCreateForm.module.css'

const clearData = {
	name: '',
	price: '',
	image: '',
}

export default function CarCreateForm({ setCarsData }) {
	const [data, setData] = useState(clearData)

	function createCar(e) {
		e.preventDefault()
		setCarsData(prev => [{ id: prev.length + 1, ...data }, ...prev])
		setData(clearData)
	}

	return (
		<form className={styles.form} action=''>
			<input
				onChange={e => setData(prev => ({ ...prev, name: e.target.value }))}
				value={data.name}
				type='text'
				placeholder='Name'
			/>
			<input
				onChange={e => setData(prev => ({ ...prev, price: e.target.value }))}
				value={data.price}
				type='text'
				placeholder='Price'
			/>
			<input
				onChange={e => setData(prev => ({ ...prev, image: e.target.value }))}
				value={data.image}
				type='text'
				placeholder='Image'
			/>
			<button onClick={e => createCar(e)}>Click</button>
		</form>
	)
}
