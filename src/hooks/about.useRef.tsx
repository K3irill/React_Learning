import React, { useEffect, useRef, useState } from 'react'

const AboutUseRef = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	const handleFocus = () => {
		inputRef.current?.focus()
	}
	return (
		<div>
			<h1>about.useRef</h1>
			<input ref={inputRef} type='text' placeholder='enter text' />
			<button onClick={handleFocus}>Focus on input</button>
			<br />
			<LoginForm />
			<br />
			<PreviousValueExample />
			<br />
			<StopWatch />
		</div>
	)
}

export default AboutUseRef
//---------------------------------------------
const LoginForm = () => {
	const inputLoginRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputLoginRef.current?.focus()
	}, [])

	return (
		<div>
			<h1>Вход</h1>
			<input ref={inputLoginRef} type='text' placeholder='Введите ваш логин' />
		</div>
	)
}
//---------------------------------------------
const PreviousValueExample = () => {
	const [count, setCount] = useState(0)
	const prevCountRef = useRef<number | null>(null)

	useEffect(() => {
		prevCountRef.current = count
	})

	const prevCount = prevCountRef.current
	return (
		<div>
			<h1>Текущий счет: {count} </h1>
			<h2>
				Предыдущее значение: {prevCount !== null ? prevCount : 'нет данных'}
			</h2>
			<button onClick={() => setCount(count + 1)}>Увеличить счет</button>
		</div>
	)
}
//---------------------------------------------
const StopWatch = () => {
	const [time, setTime] = useState(0)
	const timeRef = useRef<number | null>(null)

	const startTimer = () => {
		if (!timeRef.current) {
			timeRef.current = setInterval(() => {
				setTime(prev => prev + 1)
			}, 1000)
		}
	}

	const stopTimer = () => {
		if (timeRef.current) {
			clearInterval(timeRef.current)
			timeRef.current = null
		}
	}

	const resetTimer = () => {
		stopTimer()
		setTime(0)
	}

	return (
		<div>
			<h1>Секундомер: {time} секунд</h1>
			<button onClick={startTimer}>Старт</button>
			<button onClick={stopTimer}>Стоп</button>
			<button onClick={resetTimer}>Сброс</button>
		</div>
	)
}
