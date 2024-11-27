'use client'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Posts.module.scss'
import { fetchPosts } from '@/app/store/reducers/actionCreator'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
//-------------------------------------------------------------------

const Posts = () => {
	const dispatch = useDispatch()
	const { posts, isLoading, error } = useSelector(state => state.post)
	const [currentPostPage, setCurrentPostPage] = useState(1)
	const [showPosts, setShowPosts] = useState(16)
	const startIndex = (currentPostPage - 1) * showPosts
	const endIndex = startIndex + showPosts
	const paginatedPosts = posts.slice(startIndex, endIndex)
	const totalPages = Math.ceil(posts.length / showPosts)
	useEffect(() => {
		dispatch(fetchPosts())
	}, [])
	const handlePaginationClick = pageIndex => {
		setCurrentPostPage(pageIndex)
	}
	return (
		<div className={cn(styles.posts)}>
			{isLoading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			{paginatedPosts.map(post => (
				<div className={cn(styles.posts__item)} key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
					<Link href={'/post/' + post.id}>read</Link>
				</div>
			))}
			{Array.from({ length: totalPages }).map((_, index) => {
				return (
					<button
						className={cn({
							[styles.active]: index + 1 === currentPostPage,
						})}
						onClick={() => handlePaginationClick(index + 1)}
						key={index}
					>
						{index + 1}
					</button>
				)
			})}
		</div>
	)
}

export default Posts
