import React from 'react'

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'

interface MyForm {
	name: string
	age: number
}

const submit: SubmitHandler<MyForm> = data => {
	console.log(data)
}

const FirstForm = () => {
	const {
		watch,
		register,
		handleSubmit,
		clearErrors,
		reset,
		formState: { errors },
	} = useForm<MyForm>({
		defaultValues: {
			age: 18,
		},
	})
	const isNameValid = (value: string) =>
		value.length > 1 || 'Name should be longer than 1 character'

	const error: SubmitErrorHandler<MyForm> = data => {
		console.log(data)
	}

	return (
		<div>
			<form onSubmit={handleSubmit(submit, error)}>
				<div>
					<input
						type='text'
						{...register('name', {
							required: 'Name is required',
							validate: isNameValid,
						})}
						aria-invalid={!!errors.name}
					/>
					{errors.name && <p>{errors.name.message}</p>}
				</div>
				<div>
					<input
						type='number'
						{...register('age', { required: 'Age is required' })}
						aria-invalid={!!errors.age}
					/>
					{errors.age && <p>{errors.age.message}</p>}
				</div>
				<button>Send</button>
			</form>
			{watch('age')}
			<button type='button' onClick={() => clearErrors()}>
				Clear Errors
			</button>
			<div>
				<button
					type='button'
					onClick={() =>
						reset({
							age: 0,
							name: '',
						})
					}
				>
					Clear form
				</button>
			</div>
		</div>
	)
}

export default FirstForm
