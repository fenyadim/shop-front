import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

import { ProductsWrapper } from '@/components'

import { productsService } from '@/services/products.service'

import { IProductsData, IQueryParam } from '@/@types'

const SubCategoryPage: NextPage<IProductsData> = ({ products }) => {
	return <ProductsWrapper products={products} />
}

export default SubCategoryPage

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { subcategory } = context.params as IQueryParam
	const { data: products } = await productsService.fetchAllInSubCategory(
		subcategory
	)
	return {
		props: { products: products.data },
	}
}
