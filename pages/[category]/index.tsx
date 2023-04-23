import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

import { ProductsWrapper } from '@/components'

import { productsService } from '@/services/products.service'
import { tabsService } from '@/services/tabs.service'

import { IProductsData, IQueryParam } from '@/types'

const CategoryPage: NextPage<IProductsData> = ({ products, tabs }) => {
	return <ProductsWrapper products={products} tabs={tabs} />
}

export default CategoryPage

export const getStaticProps: GetStaticProps = async (context) => {
	const { category } = context.params as IQueryParam
	const { data: products } = await productsService.fetchAllInCategory(category)
	const { data: tabs } = await tabsService.fetchTabs()

	return {
		props: { products: products.data, tabs: tabs.data },
		revalidate: 10,
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: categories } = await tabsService.fetchTabs()
	return {
		paths: categories.data.map(({ slug }) => ({ params: { category: slug } })),
		fallback: false,
	}
}
