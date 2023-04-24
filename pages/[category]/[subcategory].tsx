import {
	GetServerSideProps,
	GetStaticPaths,
	GetStaticProps,
	NextPage,
} from 'next'
import React from 'react'

import { ProductsWrapper } from '@/components'

import { productsService } from '@/services/products.service'
import { tabsService } from '@/services/tabs.service'

import { IProductsData, IQueryParam, ParamsPath } from '@/types'

const SubCategoryPage: NextPage<IProductsData> = ({ products, tabs }) => {
	return <ProductsWrapper products={products} tabs={tabs} />
}

export default SubCategoryPage

export const getStaticProps: GetStaticProps = async (context) => {
	const { subcategory } = context.params as IQueryParam
	const { data: products } = await productsService.fetchAllInSubCategory(
		subcategory
	)
	const { data: tabs } = await tabsService.fetchTabs()

	return {
		props: { products: products.data, tabs: tabs.data },
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: categories } = await tabsService.fetchTabs()
	const params: ParamsPath[] = []
	categories.data.forEach(({ slug, subcategories }) =>
		subcategories.forEach(({ slug: slugSub }) =>
			params.push({ params: { category: slug, subcategory: slugSub } })
		)
	)
	return {
		paths: params,
		fallback: false,
	}
}
