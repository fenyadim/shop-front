import { FC, Fragment } from 'react'

import { Header, ProductItem } from '@/components'

import { IProductsData } from '@/@types'

import TabsWrapper from '../TabsWrapper/TabsWrapper'

import styles from './ProductsWrapper.module.scss'

const ProductsWrapper: FC<IProductsData> = ({ products, tabs }) => {
	return (
		<>
			<Header>
				<TabsWrapper tabs={tabs} />
			</Header>
			<div className={styles.wrapper}>
				{products.length ? (
					products.map(({ image, volume, name, slug, price }) => (
						<Fragment key={slug}>
							<ProductItem
								slug={slug}
								srcImg={image.url}
								name={name}
								brand="Carslan"
								volume={volume}
								price={price}
							/>
						</Fragment>
					))
				) : (
					<h1>Ничего нет!</h1>
				)}
			</div>
		</>
	)
}

export default ProductsWrapper
