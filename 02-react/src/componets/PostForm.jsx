import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'
const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: '', text: '' })

	const addNewPost = event => {
		event.preventDefault()
		const newPost = {
			...post,
			id: Date.now(),
		}
		create(newPost)
		setPost({ ...post, title: '', text: '' })
	}
	return (
		<form>
			<MyInput
				type='text'
				placeholder='Post name'
				value={post.title}
				onChange={event => setPost({ ...post, title: event.target.value })}
			/>
			<MyInput
				type='text'
				placeholder='Post description'
				value={post.text}
				onChange={event => setPost({ ...post, text: event.target.value })}
			/>
			<MyButton onClick={addNewPost}>Create post</MyButton>
		</form>
	)
}
export default PostForm
