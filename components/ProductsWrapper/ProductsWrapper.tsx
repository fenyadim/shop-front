import { FC, Fragment, useEffect, useRef } from 'react'

<<<<<<< HEAD
import { ProductItem } from '@/components'
=======
import { Header, ProductItem, TabsWrapper } from '@/components'

import { IBasketData, getBasket } from '@/redux/basketSlice'
import { useAppSelector } from '@/redux/hooks'
>>>>>>> 95c5f5bfbc739f5e536d498ec5ffaf3d9a43886c

import { IProductsData } from '@/types'

import styles from './ProductsWrapper.module.scss'
import { IProductsData } from '@/types'

const ProductsWrapper: FC<IProductsData> = ({ products, tabs }) => {
	const basket: IBasketData[] = useAppSelector(getBasket)
	const isMounted = useRef(false)

	useEffect(() => {
		if (isMounted) {
			const jsonBasket = JSON.stringify(basket)
			localStorage.setItem('basket', jsonBasket)
		}
		isMounted.current = true
	}, [basket])

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
