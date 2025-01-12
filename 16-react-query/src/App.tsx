import axios from 'axios'

import usePosts from './usePosts'
import { IPost } from './interface'
import usePostById from './usePostById'
import {
	useIsFetching,
	useIsMutating,
	useMutation,
	useQueryClient,
} from '@tanstack/react-query'
import { postService } from './post.service'

const App = () => {
	const isAuth = true
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['add post'],
		mutationFn: async (newPost: Omit<IPost, 'id'>) => {
			return axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
		},
		onSuccess: () => {
			console.log('Post added')
			queryClient.invalidateQueries({ queryKey: ['posts'] })
		},
	})

	const { data, error, isSuccess, isLoading } = usePosts({
		getData: postService.getPosts,
		isAuth,
	})

	// const isFetching = useIsFetching()
	// const isMutating = useIsMutating()

	const {
		data: postData,
		error: postError,
		isSuccess: isPostSuccess,
		isLoading: isPostLoading,
	} = usePostById(1)
	return (
		<div>
			<h1>React query</h1>
			<button
				onClick={() => queryClient.invalidateQueries({ queryKey: ['posts'] })}
			>
				Invalidate post
			</button>
			<button
				onClick={() =>
					mutate({ body: 'new title', title: 'new title', userId: 1 })
				}
				disabled={isPending}
			>
				{isPending ? 'Adding...' : 'Add post'}
			</button>
			<div>
				<h2>Post by id</h2>
				{isPostLoading && <p>Loading...</p>}
				{isPostSuccess && <p>{postData?.title}</p>}
				{postError && <p>{postError.message}</p>}
			</div>
			<hr />
			<div>
				<h2>Posts</h2>
				{isLoading && <p>Loading...</p>}
				{isSuccess ? (
					<p>
						{Array.isArray(data) &&
							data.map((post: IPost) => <div key={post.id}>{post.title}</div>)}
					</p>
				) : (
					<p>Not found</p>
				)}
				{error && <p>{error.message}</p>}
			</div>
		</div>
	)
}

export default App
