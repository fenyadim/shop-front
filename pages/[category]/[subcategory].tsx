import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

import { ProductsWrapper } from '@/components'

import { productsService } from '@/services/products.service'
import { tabsService } from '@/services/tabs.service'

<<<<<<< HEAD
import { IProductsData, IQueryParam } from '@/types'
=======
import { IProductsData, IQueryParam } from '@/types/.'
>>>>>>> 95c5f5bfbc739f5e536d498ec5ffaf3d9a43886c

const SubCategoryPage: NextPage<IProductsData> = ({ products, tabs }) => {
	return <ProductsWrapper products={products} tabs={tabs} />
}

export default SubCategoryPage

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { subcategory } = context.params as IQueryParam
	const { data: products } = await productsService.fetchAllInSubCategory(
		subcategory
	)
	const { data: tabs } = await tabsService.fetchTabs()

	return {
		props: { products: products.data, tabs: tabs.data },
	}
}
