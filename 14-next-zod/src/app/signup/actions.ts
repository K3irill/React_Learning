'use server'

import { SignupFormSchema } from '@/app/_lib/definitions'
import bcrypt from 'bcrypt'
import { db } from '@/app/_lib/db'
import { users } from '@/app/_lib/schema'

export async function signup(state, formData) {
	const validationResult = SignupFormSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
		password: formData.get('password'),
	})

	if (!validationResult.success) {
		return {
			errors: validationResult.error.flatten().fieldErrors,
		}
	}

	const { name, email, password } = validationResult.data

	const hashedPassword = await bcrypt.hash(password, 10)

	try {
		const data = await db
			.insert(users)
			.values({ name, email, password: hashedPassword })
			.returning({ id: users.id })

		const user = data[0]

		return {
			success: true,
			message: 'User created successfully!',
			userId: user.id,
		}
	} catch (error) {
		if (error.code === '23505') {
			return {
				errors: { email: ['This email is already taken.'] },
			}
		}

		console.error('Database error:', error)
		return {
			errors: { general: ['Something went wrong. Please try again later.'] },
		}
	}
}
