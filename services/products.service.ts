import axios from 'axios'

import { IProductsData } from '@/@types'

axios.defaults.baseURL = process.env.URL_BACK

export const productsService = {
	async fetchAllInCategory(category: string | undefined) {
		return await axios.get<{ data: IProductsData[] }>(
			`/api/productsp?populate=*&filters[category][slug][$eqi][0]=${category}`
		)
	},
	async fetchAllInSubCategory(subcategory: string | undefined) {
		return await axios.get<{ data: IProductsData[] }>(
			`/api/productsp?populate=*&filters[subcategory][slug][$eqi][0]=${subcategory}`
		)
	},
}
