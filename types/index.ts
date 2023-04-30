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

export interface IProductWithCategory extends IProduct {
	category: {
		title: string
	}
}

export interface IProductsData {
	tabs: ITabs[]
	products: IProduct[]
	meta: IMeta
}

export interface IFormValues {
	phone: string
	name: string
	city: string
	street: string
	house: string
	apartment: string
}

export interface ParamsPath {
	params: {
		category: string
		subcategory: string
	}
}

export interface IMeta {
	pagination: {
		page: number
		pageCount: number
	}
}
