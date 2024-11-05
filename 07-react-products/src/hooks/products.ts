import React, { useEffect, useState } from 'react'
import { IProduct } from '../models'

export function useProducts() {
	const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	function addProduct(product: IProduct) {
		setProducts(prev => [...prev, product])
	}
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true)
				const response = await fetch('https://fakestoreapi.com/products')
				if (!response.ok) throw new Error('Ошибка загрузки данных')
				const data = await response.json()

				setProducts(data)
			} catch (err) {
				setError((err as Error).message)
			} finally {
				setLoading(false)
			}
		}
		fetchProducts()
	}, [])
	return { products, loading, error, addProduct }
}
