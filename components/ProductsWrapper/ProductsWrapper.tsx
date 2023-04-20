import { FC, Fragment } from 'react'

import { ProductItem } from '@/components'

import TabsWrapper from '../TabsWrapper/TabsWrapper'

import styles from './ProductsWrapper.module.scss'
import { IProductsData } from '@/types'

const ProductsWrapper: FC<IProductsData> = ({ products, tabs }) => {
	return (
		<>
			<TabsWrapper tabs={tabs} />
			<div className={styles.wrapper}>
				{products.length ? (
					products.map(({ image, volume, name, slug, price }) => (
						<Fragment key={slug}>
							<ProductItem
								slug={slug}
								image={image}
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
