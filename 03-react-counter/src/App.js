import './index.scss'
import React from 'react'
import { useState } from 'react'
function App() {
	const [count, setCount] = useState(0)

	const decrement = () => {
		setCount(() => count + 1)
	}
	const increment = () => {
		setCount(() => count - 1)
	}
	return (
		<div className='App'>
			<div>
				<h2>Счетчик:</h2>
				<h1>{count}</h1>
				<button onClick={increment} className='minus'>
					- Минус
				</button>
				<button onClick={decrement} className='plus'>
					Плюс +
				</button>
			</div>
		</div>
	)
}

export default App
