import axios from 'axios'
export const CarService = {
	async getAll() {
		const response = await axios.get('http://localhost:5172/cars')
		return response
	},
	async getById(id) {
		const response = await axios.get(`http://localhost:5172/cars?id=${id}`)
		return response.data[0]
	},
}
