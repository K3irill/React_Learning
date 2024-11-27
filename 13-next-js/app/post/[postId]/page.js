import Link from 'next/link'

async function fetchPost(id) {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts/' + id
		)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		return await response.json()
	} catch (error) {
		console.error(error.message)
	}
}

const Post = async ({ params: { postId } }) => {
	const post = await fetchPost(postId)
	return (
		<div>
			<Link href={'/'}>Назад</Link>
			<h1>Post {postId}</h1>
			<div>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		</div>
	)
}

export default Post
