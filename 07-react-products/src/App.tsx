import React, { useEffect, useState } from 'react'
import Product from './components/Product'
import { useProducts } from './hooks/products'
import { Loader } from './components/Loader'
import { Error } from './components/Error'
import { Modal } from './components/Modal'
import { CreateProduct } from './components/CreateProduct'
import { IProduct } from './models'

function App() {
	const { products, loading, error, addProduct } = useProducts()
	const [modal, setModal] = useState(true)

	const createHandler = (product: IProduct) => {
		setModal(false)
		addProduct(product)
	}

	return (
		<div className='container mx-auto max-w-2xl pt-5'>
			{loading && <Loader />}
			{error && <Error error={error} />}
			{!loading && !error && products.length === 0 && (
				<p>Продукты не найдены</p>
			)}
			{products.map(item => {
				return <Product product={item} key={item.id} />
			})}

			{modal && (
				<Modal text='Creating product' onClose={() => setModal(false)}>
					<CreateProduct onCreate={createHandler}></CreateProduct>
				</Modal>
			)}
			<button
				className='bg-blue-500 text-white py-2 px-4 border'
				onClick={() => setModal(true)}
			>
				Create product
			</button>
		</div>
	)
}

export default App
