import axios from 'axios'
import { IPost } from './interface'

export class PostService {
	private URL = 'https://jsonplaceholder.typicode.com/posts'

	constructor() {
		this.getPosts = this.getPosts.bind(this)
		this.getPostById = this.getPostById.bind(this)
	}

	async getPosts(): Promise<IPost[]> {
		const response = await axios.get<IPost[]>(this.URL)
		return response.data
	}

	async getPostById(postId: number): Promise<IPost> {
		const response = await axios.get<IPost>(`${this.URL}/${postId}`)
		return response.data
	}
}

export const postService = new PostService()
