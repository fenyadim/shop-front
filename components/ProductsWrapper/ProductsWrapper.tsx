import { FC, Fragment, useEffect, useRef } from 'react'

import { Header, ProductItem, TabsWrapper } from '@/components'

import { IBasketData, getBasket } from '@/redux/basketSlice'
import { useAppSelector } from '@/redux/hooks'

import { IProductsData } from '@/types'

import styles from './ProductsWrapper.module.scss'

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
