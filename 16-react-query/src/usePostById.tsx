import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { postService } from './post.service'

const usePostById = (postId: number) => {
	const { data, error, isSuccess, isLoading, isError, refetch } = useQuery({
		queryKey: ['post', postId],
		queryFn: () => postService.getPostById(postId),
		select: data => data,
		enabled: !!postId,
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

	return { data, error, isSuccess, isLoading, isError, refetch }
}

export default usePostById
