import { useState } from 'react'
import RecipeItem from './recipe-item/RecipeItem'

function App() {
	return (
		<div>
			<RecipeItem
				recipe={{
					id: 1,
					name: 'Лазанья',
				}}
			/>
			<RecipeItem
				recipe={{
					id: 2,
					name: 'Борщ',
				}}
			/>

			<RecipeItem
				recipe={{
					id: 3,
					name: 'Паста',
				}}
			/>
			<RecipeItem
				recipe={{
					id: 4,
					name: 'Круассан',
				}}
			/>
		</div>
	)
}

export default App
