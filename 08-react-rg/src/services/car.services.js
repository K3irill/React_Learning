import axios from 'axios'
export const CarService = {
	async getAll() {
		const response = await axios.get('http://localhost:5172/cars')
		return response
	},
}
