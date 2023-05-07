import { AxiosError } from 'axios'
import { GetServerSideProps, NextPage } from 'next'

import { SingleProduct } from '@/components'

import { productsService } from '@/services/products.service'

import { IProductWithCategory } from '@/types'

const ProductPage: NextPage<{ product: IProductWithCategory }> = ({
	product,
}) => {
	return <SingleProduct {...product} />
}

export default ProductPage

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { slug } = context.params as { slug: string }
	const response = await productsService.fetchOne(slug)

	const { data: product } = response.data

	if (!product.length) {
		return {
			notFound: true,
		}
	}

	return {
		props: { product: product[0] },
	}
}
