export interface ISimpleFetchingData {
	title: string
	slug: string
}

export interface ITabs extends ISimpleFetchingData {
	subcategories: ISimpleFetchingData[]
}

export interface IQueryParam {
	category?: string
	subcategory?: string
}

export interface IProduct {
	desc?: string
	image: {
		url: string
	}
	name: string
	price: number
	slug: string
	volume: number
	brand: {
		title: string
	}
}

export interface IProductsData {
	tabs: ITabs[]
	products: IProduct[]
}

export interface IFormValues {
	phone: string
	name: string
	city: string
	street: string
	house: string
	apartment: string
}
