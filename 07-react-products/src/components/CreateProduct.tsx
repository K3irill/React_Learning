import { useState } from 'react'
import { IProduct } from '../models'
import { Error } from './Error'
interface CreateProductProps {
	onCreate: (product: IProduct) => void
}
export function CreateProduct({ onCreate }: CreateProductProps) {
	const [value, setValue] = useState('')
	const [error, setError] = useState('')
	const [productData, setProductData] = useState<IProduct>({
		title: '',
		category: '412',
		description: 'hf',
		image: '/',
		price: 0,
		rating: { rate: 0, count: 0 },
	})

	function SubmitEvent(event: React.FormEvent) {
		event.preventDefault()
		setError('')

		if (value.trim().length === 0) {
			setError('Please enter valid title')
			return
		}

		setProductData(prev => ({ ...prev, title: value }))

		fetch('https://fakestoreapi.com/products', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...productData, title: value }),
		})
			.then(res => {
				return res.json()
			})
			.then(json => {
				onCreate(json)
				console.log(json)
			})
			.catch(err => setError(err.message))
	}

	function changeEvent(event: React.ChangeEvent<HTMLInputElement>) {
		setValue(event.target.value)
	}

	return (
		<form onSubmit={SubmitEvent} className=' '>
			<input
				value={value}
				onChange={changeEvent}
				type='text'
				className='w-full border py-2 px-4 mb-2 outline-none'
				placeholder='Enter product title'
			/>
			{error && <Error error={error} />}
			<button type='submit' className='py-2 px-4 border bg-yellow-400'>
				Create
			</button>
		</form>
	)
}
