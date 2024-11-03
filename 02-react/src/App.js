import React, { useRef, useState } from 'react'
import Counter from './componets/Counter'
import './styles/App.css'
import PostList from './componets/PostList'
import PostForm from './componets/PostForm'
export default function App() {
	let [posts, setPosts] = useState([
		{
			id: 1,
			title: 'Javascript',
			text: 'for frontend and backend',
		},
		{
			id: 2,
			title: 'Python',
			text: 'for backend, DevOps and ML',
		},
		{
			id: 3,
			title: 'Java',
			text: 'for backend and mobile',
		},
	])

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}
	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}
	return (
		<div>
			{/* <Counter></Counter> */}
			<div className='App'>
				<PostForm create={createPost} />
				<PostList remove={removePost} posts={posts} title={'Список постов 1'} />
			</div>
		</div>
	)
}
