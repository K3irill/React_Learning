import React, { useState } from 'react'

const ControlledForm = () => {
	const [name, setName] = useState<string>('')
	const [age, setAge] = useState<number>(0)
	const [submitted, setSubmitted] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)
	const [nameError, setNameError] = useState<string | null>(null)
	const [ageError, setAgeError] = useState<string | null>(null)

	const handleNamaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const ageValue = Number(e.target.value)
		if (!isNaN(ageValue)) {
			setAge(ageValue)
		}
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!name) {
			setNameError('Имя не может быть пустым')
		} else {
			setNameError(null)
		}

		if (!age) {
			setAgeError('Возраст не может быть пустым')
		} else if (isNaN(+age)) {
			setAgeError('Возраст должен быть числом')
		} else {
			setAgeError(null)
		}

		if (name && age && !isNaN(Number(age))) {
			setSubmitted(true)
			setError(null)
		} else {
			setError('Заполните все поля корректно!')
			setSubmitted(false)
		}
	}

	return (
		<div>
			<h1>Form</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input
						value={name}
						type='text'
						name='name'
						onChange={handleNamaChange}
						id='name'
						placeholder='Enter your name here'
					/>
					{nameError && <p style={{ color: 'red' }}>{nameError}</p>}
				</div>
				<div>
					<label htmlFor='age'>Age:</label>
					<input
						value={age}
						type='number'
						name='age'
						onChange={handleAgeChange}
						id='age'
						placeholder='Enter your age here'
					/>
					{ageError && <p style={{ color: 'red' }}>{ageError}</p>}
				</div>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<button type='submit'>Send</button>
			</form>
			{submitted && (
				<div>
					<h2>Данные отправлены!</h2>
					<p>Имя: {name}</p>
					<p>Возраст: {age}</p>
				</div>
			)}
		</div>
	)
}

export default ControlledForm
