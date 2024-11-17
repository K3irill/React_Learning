import React, { ChangeEvent, useCallback, useState } from 'react'

const AboutUseCallback = () => {
	const [count, setCount] = useState(0)

	const handleButtonClick = useCallback(() => {
		console.log('Кнопка нажата, count: ', count)
	}, [count])

	return (
		<div>
			<h1>AboutUseCallback</h1>
			<h1>Счетчик: {count}</h1>
			<button onClick={() => setCount(count + 1)}>Увеличить счётчик</button>
			<ChildComponent onButtonClick={handleButtonClick}></ChildComponent>
		</div>
	)
}

export default AboutUseCallback
interface ChildComponentProps {
	onButtonClick: () => void
}
const ChildComponent: React.FC<ChildComponentProps> = ({ onButtonClick }) => {
	console.log('Рендеринг дочернего компонента')
	return <button onClick={onButtonClick}>Вызвать функцию</button>
}
