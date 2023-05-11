import axios, { AxiosError } from 'axios'

import { IBasketData } from '@/redux/basketSlice'

import { IFormValues, IMeta, IProduct, IProductsData } from '@/types'

axios.defaults.baseURL = process.env.URL_BACK

interface IFetchingType {
	data: IProductsData[]
	meta: IMeta
}

interface IStatusError {
	statusCode: number
}

interface IFetchOne extends IStatusError {
	data: IProduct[]
}

export const productsService = {
	async fetchAll(
		category: string | undefined,
		subcategory: string | undefined,
		page: string = '1'
	) {
		if (!subcategory) {
			return await axios.get<IFetchingType>(
				`/api/productsp?populate=*&filters[category][slug][$eqi][0]=${category}&pagination[page]=${page}&pagination[pageSize]=10`
			)
		} else {
			return await axios.get<IFetchingType>(
				`/api/productsp?populate=*&filters[subcategory][slug][$eqi][0]=${subcategory}&pagination[page]=${page}&pagination[pageSize]=10`
			)
		}
	},

	async fetchOne(slug: string) {
		return await axios.get<IFetchOne>(
			`/api/productsp?filters[slug][$eqi]=${slug}&populate=*`
		)
	},

	async fetchProductSlugs() {
		return await axios.get<IFetchOne>('/api/productsp')
	},

	async postOrder(
		formData: IFormValues,
		priceTotal: number,
		basket: IBasketData[]
	) {
		return await axios.post('/api/orders', {
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
