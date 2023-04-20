import cn from 'classnames'
import Image from 'next/image'

import styles from './Button.module.scss'

interface IButton {
	price: number
	count: number
	addProduct: () => void
	decreaseProduct: () => void
}

const Button: React.FC<IButton> = ({
	price,
	count,
	addProduct,
	decreaseProduct,
}) => {
	return (
		<>
			{count < 1 ? (
				<div className={styles.button_wrapper} onClick={addProduct}>
					<p className={styles.price_title}>{price} руб.</p>
					<Image src="/image/cart.svg" alt="Cart" width={13} height={13} />
				</div>
			) : (
				<div className={cn(styles.button_wrapper, styles.button_active)}>
					<button className={styles.plus} onClick={addProduct} />
					<p>{count}</p>
					<button onClick={decreaseProduct} />
				</div>
			)}
		</>
	)
}

export default Button
