import React, { useMemo, useState } from 'react'

const AboutUseMemo = () => {
	const [count, setCount] = useState(0)
	const [inputValue, setInputValue] = useState('')

	const computedValue = useMemo(() => {
		console.log('Выполнение вычислений...')
		let result = 0
		for (let index = 0; index < 100000000; index++) {
			result += index
		}
		return result + count
	}, [count])

	return (
		<div>
			<h1>about.useMemo</h1>
			<div>
				<h1>Результат вычислений: {computedValue}</h1>
				<button onClick={() => setCount(count + 1)}>Увеличить счётчик</button>
				<input
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					type='text'
					placeholder='Введите текст'
				/>
			</div>
		</div>
	)
}

export default AboutUseMemo
