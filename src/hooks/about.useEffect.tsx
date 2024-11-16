import React, { useEffect, useState } from 'react'

const AboutUseEffect = () => {
	const [seconds, setSeconds] = useState<number>(0)
	const [isStarted, setIsStarted] = useState<boolean>(false)
	const [timerId, setTimerId] = useState<number | null>(null)

	const startTimer = () => {
		const interval = setInterval(() => {
			setSeconds(prev => prev + 1)
		}, 1000)
		console.log(interval)

		setTimerId(interval)
		setIsStarted(true)
	}

	const stopTimer = () => {
		if (timerId) {
			clearInterval(timerId)
			setIsStarted(false)
		}
	}
	useEffect(() => {
		return () => {
			if (timerId) {
				clearInterval(timerId)
			}
		}
	}, [timerId])

	return (
		<div>
			<h1>Прошло времени: {seconds} секунд</h1>
			{!isStarted ? (
				<button onClick={() => startTimer()}>Старт!</button>
			) : (
				<button onClick={() => stopTimer()}>Стоп!</button>
			)}
		</div>
	)
}

export default AboutUseEffect
