import React from 'react'
import { useState } from 'react'
import './index.scss'

const questions = [
	{
		title: 'React - это ... ?',
		variants: ['библиотека', 'фреймворк', 'приложение'],
		correct: 0,
	},
	{
		title: 'Компонент - это ... ',
		variants: [
			'приложение',
			'часть приложения или страницы',
			'то, что я не знаю что такое',
		],
		correct: 1,
	},
	{
		title: 'Что такое JSX?',
		variants: [
			'Это простой HTML',
			'Это функция',
			'Это тот же HTML, но с возможностью выполнять JS-код',
		],
		correct: 2,
	},
	{
		title: 'Лучшая ОС?',
		variants: ['Mac', 'Windows', 'Linux'],
		correct: 1,
	},
	{
		title: 'Что если не React?',
		variants: ['Vue', 'Angular', 'Svelte', 'Ember', 'React'],
		correct: 4,
	},
]

function Result({ correctCount, reset }) {
	return (
		<div className='result'>
			<img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
			<h2>
				Вы отгадали {correctCount} ответ
				{correctCount === 1
					? ''
					: correctCount > 1 && correctCount < 5
					? 'а'
					: 'ов'}{' '}
				из {questions.length}
			</h2>
			<button onClick={reset}>Попробовать снова</button>
		</div>
	)
}

function Game({ step, question, isCorrect }) {
	const percentage = Math.round((step / questions.length) * 100)

	return (
		<>
			<div className='progress'>
				<div
					style={{ width: `${percentage}%` }}
					className='progress__inner'
				></div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((variant, index) => {
					return (
						<li onClick={() => isCorrect(index, question.correct)} key={index}>
							{variant}
						</li>
					)
				})}
			</ul>
		</>
	)
}

function App() {
	const [step, setStep] = useState(0)
	const [correctCount, setCorrectCount] = useState(0)
	const question = questions[step]

	const reset = () => {
		setStep(0)
		setCorrectCount(0)
	}

	const isCorrect = (index, correct) => {
		console.log(index, correct)

		setStep(() => step + 1)
		if (index === correct) {
			setCorrectCount(() => correctCount + 1)
		}
	}

	return (
		<div className='App'>
			{step >= questions.length ? (
				<Result reset={reset} correctCount={correctCount} />
			) : (
				<Game step={step} isCorrect={isCorrect} question={question} />
			)}
		</div>
	)
}

export default App
