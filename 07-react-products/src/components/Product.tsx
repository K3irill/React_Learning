import { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
	product: IProduct
}
export default function Product({ product }: ProductProps) {
	const [details, setDetails] = useState(false)

	return (
		<div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
			<img src={product.image} alt={product.title} className='w-1/6' />
			<h1>{product.title}</h1>
			<span className='font-bold'>{product.price}$</span>
			<button
				onClick={() => setDetails(prev => !prev)}
				className={`py-2 px-4 border ${
					!details ? ' bg-yellow-400' : ' bg-red-300'
				} `}
			>
				{!details ? 'Show details' : 'Hide details'}
			</button>
			{details && (
				<div>
					<p>{product.description}</p>
					<p>
						Rate:{' '}
						<span style={{ color: 'green', fontWeight: 'bold' }}>
							{product?.rating?.rate}
						</span>
					</p>
				</div>
			)}
		</div>
	)
}
