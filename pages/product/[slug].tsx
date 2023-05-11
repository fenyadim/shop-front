import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { SingleProduct } from '@/components'

import { productsService } from '@/services/products.service'

import { IProductWithCategory } from '@/types'

const ProductPage: NextPage<{ product: IProductWithCategory }> = ({
	product,
}) => {
	return <SingleProduct {...product} />
}

export default ProductPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as { slug: string }
	const response = await productsService.fetchOne(slug)

	const { data: product } = response.data

	return {
		props: { product: product[0] },
		revalidate: 10,
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await productsService.fetchProductSlugs()
	const { data: products } = response.data

	return {
		paths: products.map(({ slug }) => ({
			params: { slug },
		})),
		fallback: false,
	}
}
