export interface IProduct {
	category: string
	description: string
	id?: number | null
	image: string
	price: number
	rating: {
		rate?: number | null
		count?: number | null
	}
	title: string
}
