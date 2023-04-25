import { motion } from 'framer-motion'
import { FC, Fragment, useEffect, useRef } from 'react'

import { Pagination, ProductItem, TabsWrapper } from '@/components'

import { IBasketData, getBasket } from '@/redux/basketSlice'
import { useAppSelector } from '@/redux/hooks'

import { IProductsData } from '@/types'

import styles from './ProductsWrapper.module.scss'
import { variants } from '@/constans/animate'

const ProductsWrapper: FC<IProductsData> = ({ products, tabs, meta }) => {
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
			<motion.div
				variants={variants}
				initial="hidden"
				animate="show"
				className={styles.wrapper}
			>
				{products.length ? (
					products.map(({ image, volume, name, slug, price, brand }) => (
						<Fragment key={slug}>
							<ProductItem
								slug={slug}
								image={image}
								name={name}
								brand={brand}
								volume={volume}
								price={price}
							/>
						</Fragment>
					))
				) : (
					<h1>Ничего нет!</h1>
				)}
			</motion.div>
			<Pagination
				pageSize={meta.pagination.pageCount}
				currentPage={meta.pagination.page}
			/>
		</>
	)
}

export default ProductsWrapper
