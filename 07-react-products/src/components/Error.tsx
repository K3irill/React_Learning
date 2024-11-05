interface ErrorProps {
	error: string
}

export function Error({ error }: ErrorProps) {
	return <p className='text-red-500'>Ошибка: {error}</p>
}
