import { GetServerSideProps, NextPage } from 'next'

import { SingleProduct } from '@/components'

import { productsService } from '@/services/products.service'

import { IProductWithCategory } from '@/types'

const ProductPage: NextPage<{ products: IProductWithCategory }> = ({
	products,
}) => {
	return <SingleProduct {...products} />
}

export default ProductPage

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { slug } = context.params as { slug: string }
	const response = await productsService.fetchOne(slug)
	const { data: products } = response.data

	return {
		props: { products: products[0] },
	}
}
