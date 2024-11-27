'use client'
import Link from 'next/link'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Posts from './components/posts/Posts'
export default function Home() {
	return (
		<Provider store={store}>
			<div>Главная страница</div>
			<Posts></Posts>
		</Provider>
	)
}
