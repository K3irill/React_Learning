import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)
	function increment() {
		setCount(() => count - 1)
	}
	function decrement() {
		setCount(() => count + 1)
	}
	return (
		<div>
			<button onClick={() => increment()}>-</button>
			<h2>{count}</h2>
			<button onClick={() => decrement()}>+</button>
		</div>
	)
}
export default Counter
