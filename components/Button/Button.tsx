import cn from 'classnames'
import Image from 'next/image'

import { ADD_PRODUCT, DECREASE_PRODUCT, IBasketData } from '@/redux/basketSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

import { IProduct } from '@/types'

import styles from './Button.module.scss'

interface IButton extends IProduct {
	isBig?: boolean
}

const Button: React.FC<IButton> = ({ isBig = false, ...props }) => {
	const findProduct: IBasketData | undefined = useAppSelector((state) =>
		state.basket.find((obj) => obj.slug === props.slug)
	)
	const dispatch = useAppDispatch()
	const countProduct = findProduct ? findProduct.count : 0

	const addProduct = () => {
		dispatch(ADD_PRODUCT(props))
	}

	const decreaseProduct = () => {
		dispatch(DECREASE_PRODUCT(props.slug))
	}

	const sizeImg = isBig ? 16 : 13

	return (
		<>
			{countProduct < 1 ? (
				<div
					className={cn(styles.button_wrapper, {
						[styles.button_big]: isBig,
					})}
					onClick={addProduct}
				>
					<p className={styles.price_title}>{props.price} руб.</p>
					<Image
						src="/image/cart.svg"
						alt="Cart"
						width={sizeImg}
						height={sizeImg}
					/>
				</div>
			) : (
				<div
					className={cn(styles.button_wrapper, styles.button_active, {
						[styles.button_big]: isBig,
					})}
				>
					<button onClick={decreaseProduct} />
					<p>{countProduct}</p>
					<button className={styles.plus} onClick={addProduct} />
				</div>
			)}
		</>
	)
}

export default Button
