import React, { useRef, useState } from 'react'
import Counter from './componets/Counter'
import './styles/App.css'
import PostList from './componets/PostList'
import PostForm from './componets/PostForm'
import MySelect from './componets/UI/select/MySelect'
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
	const [select, setSelect] = useState('')
	const createPost = newPost => {
		setPosts([...posts, newPost])
	}
	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}
	const sortPosts = sort => {
		setSelect(sort)
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
		console.log(sort)
	}
	return (
		<div>
			{/* <Counter></Counter> */}
			<div className='App'>
				<PostForm create={createPost} />
				<hr style={{ margin: '15px 0' }} />
				<MySelect
					value={select}
					onChange={sortPosts}
					defaultValue={'Сортировка по:'}
					options={[
						{ value: 'title', name: 'По названию' },
						{ value: 'text', name: 'По описанию' },
					]}
				/>
				{posts.length > 0 ? (
					<PostList
						remove={removePost}
						posts={posts}
						title={'Список постов 1'}
					/>
				) : (
					<div>
						<h2 style={{ textAlign: 'center' }}>Посты не найдены</h2>
					</div>
				)}
			</div>
		</div>
	)
}
