import axios from 'axios'

import { IBasketData } from '@/redux/basketSlice'

import { IFormValues, IMeta, IProduct, IProductsData } from '@/types'

axios.defaults.baseURL = process.env.URL_BACK

interface IFetchingType {
	data: IProductsData[]
	meta: IMeta
}

export const productsService = {
	async fetchAllInCategory(category: string | undefined, page: string = '1') {
		return await axios.get<IFetchingType>(
			`/api/productsp?populate=*&filters[category][slug][$eqi][0]=${category}&pagination[page]=${page}&pagination[pageSize]=10`
		)
	},
	async fetchAllInSubCategory(
		subcategory: string | undefined,
		page: string = '1'
	) {
		return await axios.get<IFetchingType>(
			`/api/productsp?populate=*&filters[subcategory][slug][$eqi][0]=${subcategory}&pagination[page]=${page}&pagination[pageSize]=10`
		)
	},

	async fetchOne(slug: string) {
		return await axios.get<{ data: IProduct[] }>(
			`/api/productsp?filters[slug][$eqi]=${slug}&populate=*`
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
