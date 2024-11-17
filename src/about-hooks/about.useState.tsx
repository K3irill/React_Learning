import React, { useState } from 'react'

const AboutUseState = () => {
	const [count, setCount] = useState<number>(0)
	const [message, setMessage] = useState<string | null>(null)

	const increment = () => {
		if (count < 10) {
			setCount(prev => prev + 1)
			setMessage(null)
		} else {
			setMessage('Достигнуто максимальное значение!')
		}
	}
	const decrement = () => {
		if (count > 0) {
			setCount(prev => prev - 1)
			setMessage(null)
		} else {
			setMessage('Достигнуто минимальное значение!')
		}
	}
	const clearCount = () => {
		setCount(0)
		setMessage(null)
	}
	return (
		<div>
			<h1>about.useState</h1>
			<h2>Счетчик: {count}</h2>
			{message && <p style={{ color: 'red' }}>{message}</p>}
			<div>
				<button onClick={increment} disabled={count >= 10}>
					Увеличить
				</button>
				<button onClick={decrement} disabled={count <= 0}>
					Уменьшить
				</button>
			</div>
			<button onClick={clearCount}>Сбросить</button>
		</div>
	)
}

export default AboutUseState
