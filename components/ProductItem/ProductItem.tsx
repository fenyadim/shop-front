import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Button } from '@/components'

import { ADD_PRODUCT, DECREASE_PRODUCT, IBasketData } from '@/redux/basketSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

import { IProduct } from '@/types'

import styles from './ProductItem.module.scss'

interface IProductItem extends IProduct {
	isHorizont?: boolean
}

const ProductItem: FC<IProductItem> = (props) => {
	const { slug, image, volume, brand, name, price, isHorizont = false } = props

	const findProduct: IBasketData | undefined = useAppSelector((state) =>
		state.basket.find((obj) => obj.slug === slug)
	)
	const dispatch = useAppDispatch()
	const countProduct = findProduct ? findProduct.count : 0

	const addProduct = () => {
		dispatch(ADD_PRODUCT(props))
	}

	const decreaseProduct = () => {
		dispatch(DECREASE_PRODUCT(slug))
	}

	return (
		<div
			className={cn(
				{ [styles.horizontal]: isHorizont, [styles.vertical]: !isHorizont },
				styles.card
			)}
		>
			<Link href={`/product/${slug}`}>
				<Image
					className={styles.product_img}
					src={`${process.env.URL_BACK}${image.url}`}
					alt={name}
					width={isHorizont ? 100 : 170}
					height={isHorizont ? 100 : 185}
					unoptimized
					style={{ objectFit: 'cover', objectPosition: 'top' }}
				/>
			</Link>
			<div className={styles.info_wrapper}>
				<Link href={`/product/${slug}`}>
					<h3 className={styles.product_brand}>{brand.title}</h3>
					<h2 className={styles.product_name}>{name}</h2>
				</Link>
				<div className={styles.info_bottom}>
					{!isHorizont && <p className={styles.volume}>Объем: {volume}ml</p>}
					<Button
						price={price}
						count={countProduct}
						addProduct={addProduct}
						decreaseProduct={decreaseProduct}
					/>
					{isHorizont && (
						<p className={styles.price}>{price * countProduct} руб.</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductItem
