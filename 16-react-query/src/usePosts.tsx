import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { IPost } from './interface'

interface IUsePosts {
	getData: () => Promise<IPost[]>
	isAuth?: boolean
}

const usePosts = ({ getData, isAuth }: IUsePosts) => {
	const { data, error, isSuccess, isLoading, isError } = useQuery({
		queryKey: ['posts'],
		queryFn: getData,
		select: data => data,
		enabled: isAuth,
		initialData: [
			{
				body: 'Initial data',
				id: 0,
				title: 'Initial data',
				userId: 0,
			},
		],
		staleTime: 5000,
	})

	useEffect(() => {
		if (isSuccess) {
			console.log(data)
		}
	}, [isSuccess])

	useEffect(() => {
		if (isError) {
			console.warn(error)
		}
	}, [isError])

	return { data, error, isSuccess, isLoading, isError }
}

export default usePosts
