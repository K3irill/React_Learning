import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IForm {
	email: string
	message: string
}

const SecondForm = () => {
	const { register, handleSubmit, formState } = useForm<IForm>({
		mode: 'onChange',
		defaultValues: {},
	})
	const onSubmit: SubmitHandler<IForm> = data => {
		console.log(data)
	}
	const emailError = formState.errors['email']?.message
	const messageError = formState.errors['message']?.message

	return (
		<div>
			SecondForm
			<h1>Feedback form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type='text'
					placeholder='Enter e-mail'
					{...register('email', {
						required: 'This field is required!',
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
							message: 'Invalid email address',
						},
					})}
				/>
				{emailError && <p> {emailError}</p>}
				<textarea
					placeholder='Enter message'
					{...register('message', {
						required: 'This field is required!',
					})}
				></textarea>
				{messageError && <p>{messageError}</p>}
				<button>Send</button>
			</form>
		</div>
	)
}

export default SecondForm
