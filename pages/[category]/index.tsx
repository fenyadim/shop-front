import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

import { ProductsWrapper } from '@/components'

import { productsService } from '@/services/products.service'

import { IProductsData, IQueryParam } from '@/@types'

const CategoryPage: NextPage<IProductsData> = ({ products }) => {
	return <ProductsWrapper products={products} />
}

export default CategoryPage

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { category } = context.params as IQueryParam
	const { data: products } = await productsService.fetchAllInCategory(category)
	return {
		props: { products: products.data },
	}
}
