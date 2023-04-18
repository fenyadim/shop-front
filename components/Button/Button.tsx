import cn from 'classnames'
import Image from 'next/image'
import React from 'react'

import {
	ADD_PRODUCT,
	DECREASE_PRODUCT,
	DELETE_PRODUCT,
	IBasketData,
} from '@/redux/basketSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

import styles from './Button.module.scss'

const Button: React.FC<{
	price: number
	slug: string
}> = ({ price, slug }) => {
	const findProduct: IBasketData | undefined = useAppSelector((state) =>
		state.products.basket.find((obj) => obj.slug === slug)
	)
	const dispatch = useAppDispatch()
	const countProduct = findProduct ? findProduct.count : 0

	const onClickMinus = () => {
		if (countProduct > 1) {
			dispatch(DECREASE_PRODUCT(slug))
		} else {
			dispatch(DELETE_PRODUCT(slug))
		}
	}

	return (
		<>
			{countProduct < 1 ? (
				<div
					className={styles.button_wrapper}
					onClick={() => dispatch(ADD_PRODUCT({ slug, price }))}
				>
					<p className={styles.price_title}>{price} руб.</p>
					<Image src="/image/cart.svg" alt="Cart" width={13} height={13} />
				</div>
			) : (
				<div className={cn(styles.button_wrapper, styles.button_active)}>
					<button
						className={styles.plus}
						onClick={() => dispatch(ADD_PRODUCT({ slug, price }))}
					/>
					<p>{countProduct}</p>
					<button onClick={onClickMinus} />
				</div>
			)}
		</>
	)
}

export default Button
