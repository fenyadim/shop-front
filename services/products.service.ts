import axios from 'axios'

import { IBasketData } from '@/redux/basketSlice'

import { IFormValues, IProductsData } from '@/types'

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

	async postOrder(
		formData: IFormValues,
		priceTotal: number,
		basket: IBasketData[]
	) {
		return await axios.post(`${process.env.URL_BACK}/api/orders`, {
			data: {
				...formData,
				total: priceTotal,
				basket: basket.map(({ name, slug, volume, count }) => ({
					name,
					slug,
					volume,
					count,
				})),
			},
		})
	},
}
