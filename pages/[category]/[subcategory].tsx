import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

import { ProductsWrapper } from '@/components'

import { productsService } from '@/services/products.service'
import { tabsService } from '@/services/tabs.service'

import { IProductsData, IQueryParam } from '@/types'

const SubCategoryPage: NextPage<IProductsData> = ({ products, tabs }) => {
	// return <ProductsWrapper products={products} tabs={tabs} />
	return <h1></h1>
}

export default SubCategoryPage

// export const getStaticProps: GetStaticProps = async (context) => {
// 	const { subcategory } = context.params as IQueryParam
// 	const { data: products } = await productsService.fetchAllInSubCategory(
// 		subcategory
// 	)
// 	const { data: tabs } = await tabsService.fetchTabs()

// 	return {
// 		props: { products: products.data, tabs: tabs.data },
// 	}
// }

export const getServerSideProps = async () => {
	const { data: categories } = await tabsService.fetchTabs()
	const params = categories.data.map(({ slug, subcategories }) =>
		subcategories.map(({ slug: subSlug }) => ({
			params: {
				category: slug,
				subcategory: subSlug,
			},
		}))
	)
	console.log(params)
	return { props: {} }
	// return {
	// 	paths: params,
	// 	fallback: false,
	// }
}
