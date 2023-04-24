import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

import { ProductsWrapper } from '@/components'

import { productsService } from '@/services/products.service'
import { tabsService } from '@/services/tabs.service'

import { IProductsData, IQueryParam } from '@/types'

const SubCategoryPage: NextPage<IProductsData> = ({ products, tabs, meta }) => {
	return <ProductsWrapper products={products} tabs={tabs} meta={meta} />
}

export default SubCategoryPage

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { subcategory } = context.params as IQueryParam
	const { page } = context.query
	const pageNumber = page ? page : '1'

	const response = await productsService.fetchAllInSubCategory(
		subcategory,
		pageNumber as string
	)
	const { data: products, meta } = response.data
	const { data: tabs } = await tabsService.fetchTabs()

	return {
		props: { products, tabs: tabs.data, meta },
	}
}
