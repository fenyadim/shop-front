export interface ISimpleFetchingData {
	title: string
	slug: string
}

export interface ITabs extends ISimpleFetchingData {
	subcategories: ISimpleFetchingData[]
}

export interface IBasket {
	slug: string
	count: number
}

export interface IQueryParam {
	category?: string
	subcategory?: string
}

export interface IProductsData {
	tabs: ITabs[]
	products: [
		{
			desc: string
			image: {
				url: string
			}
			name: string
			price: number
			slug: string
			volume: number
		}
	]
}
