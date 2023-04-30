import { motion } from 'framer-motion'
import { FC, Fragment } from 'react'

import { FormOrder, Header, ProductItem } from '@/components'

import { useAppSelector } from '@/redux/hooks'

import { variants } from '@/constans/animate'

import styles from './Cart.module.scss'

const Cart: FC = () => {
	const { basket, priceTotal } = useAppSelector((state) => state)
	return (
		<>
			<Header title={'Корзина'}>
				<h2 className={styles.total_sum}>Итого: {priceTotal} руб.</h2>
			</Header>
			{basket.length ? (
				<div
					style={{ height: '70vh', overflowY: 'scroll', padding: '1px 20px' }}
				>
					<motion.div
						variants={variants}
						initial="hidden"
						animate="show"
						className={styles.basket_wrapper}
					>
						{basket.map(({ brand, volume, slug, price, name, image }) => (
							<Fragment key={slug}>
								<ProductItem
									slug={slug}
									image={image}
									name={name}
									brand={brand}
									volume={volume}
									price={price}
									isHorizont
								/>
							</Fragment>
						))}
					</motion.div>
					<FormOrder basket={basket} priceTotal={priceTotal} />
				</div>
			) : (
				<h2 className={styles.empty_text}>Корзина пуста!</h2>
			)}
		</>
	)
}

export default Cart
