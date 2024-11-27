'use client'
import { signup } from '@/app/signup/actions'
import { useActionState } from 'react'

export function SignUpForm() {
	const [state, action, pending] = useActionState(signup, {
		loading: false,
		errors: null,
		successMessage: null,
	})

	return (
		<form action={action}>
			<label>
				Name:
				<input name='name' type='text' />
			</label>
			{state?.errors?.name && (
				<p style={{ color: 'red' }}>{state.errors.name}</p>
			)}

			<label>
				Email:
				<input name='email' type='email' />
			</label>
			{state?.errors?.email && (
				<p style={{ color: 'red' }}>{state.errors.email}</p>
			)}

			<label>
				Password:
				<input name='password' type='password' />
			</label>
			{state?.errors?.password && (
				<p style={{ color: 'red' }}>{state.errors.password}</p>
			)}

			<button type='submit' disabled={pending}>
				{pending ? 'Submitting' : 'Sign up'}
			</button>

			{state?.success && <p style={{ color: 'green' }}>{state.message}</p>}
		</form>
	)
}
