import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../screens/home/Home'
import CarDetail from '../screens/car-detail/CarDetail'
export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/car/:id' element={<CarDetail />} />
				<Route path='*' element={<div>Not found</div>} />
			</Routes>
		</BrowserRouter>
	)
}
